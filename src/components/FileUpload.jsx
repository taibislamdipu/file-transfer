import AwsS3 from "@uppy/aws-s3";
import AwsS3Multipart from "@uppy/aws-s3-multipart";
import Compressor from "@uppy/compressor";
import Uppy, { debugLogger } from "@uppy/core";
import Dashboard from "@uppy/dashboard";
import GoldenRetriever from "@uppy/golden-retriever";
import Tus from "@uppy/tus";
import XHRUpload from "@uppy/xhr-upload";
import { useEffect } from "react";

import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import "@uppy/image-editor/dist/style.css";

const FileUpload = () => {
  useEffect(() => {
    const UPLOADER = "tus";
    const COMPANION_URL = "http://companion.uppy.io";
    // const companionAllowedHosts = [];
    const TUS_ENDPOINT = "https://tusd.tusdemo.net/files/";
    const XHR_ENDPOINT = "";
    const RESTORE = false;

    const uppyDashboard = new Uppy({ logger: debugLogger })
      .use(Dashboard, {
        inline: true,
        target: "#app",
        showProgressDetails: true,
        proudlyDisplayPoweredByUppy: true,
      })

      .use(Compressor);

    switch (UPLOADER) {
      case "tus":
        uppyDashboard.use(Tus, { endpoint: TUS_ENDPOINT, limit: 6 });
        break;
      case "s3":
        uppyDashboard.use(AwsS3, { companionUrl: COMPANION_URL, limit: 6 });
        break;
      case "s3-multipart":
        uppyDashboard.use(AwsS3Multipart, {
          companionUrl: COMPANION_URL,
          limit: 6,
        });
        break;
      case "xhr":
        uppyDashboard.use(XHRUpload, {
          endpoint: XHR_ENDPOINT,
          limit: 6,
          bundle: true,
        });
        break;
      default:
    }

    if (RESTORE) {
      uppyDashboard.use(GoldenRetriever, { serviceWorker: true });
    }

    window.uppy = uppyDashboard;

    uppyDashboard.on("complete", (result) => {
      if (result.failed.length === 0) {
        console.log("Upload successful");
      } else {
        console.warn("Upload failed");
      }
      console.log("successful files:", result.successful);
      console.log("failed files:", result.failed);
    });

    return () => {
      uppyDashboard.close();
    };
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  return <div id="app"></div>;
};

export default FileUpload;
