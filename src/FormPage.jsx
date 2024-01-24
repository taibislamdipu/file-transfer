import FileUpload from "./components/FileUpload";

const FormPage = () => {
  const handleChange = (e) => {
    let value = e.target.value;
    console.log(value);
  };

  const handleSubmit = () => {
    console.log("handleSubmit");
  };

  let error = true;

  const errMsg = "Please complete this required field.";

  return (
    <div className="grid grid-cols-2 max-w-7xl mx-auto gap-5 place-content-center h-screen">
      <div className="col-span-2 flex items-center justify-between">
        <div>
          <h1 className="text-5xl text-brand leading-tight">Take Free Trail</h1>
          <p className="max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            provident excepturi alias minima similique a animi facilis sit
            laudantium illum?
          </p>
        </div>
        <div className="max-w-sm flex items-end flex-col gap-3">
          <div>
            <img
              className="h-[45px]"
              src="../src/assets/bzm-logo.png"
              alt="BZM Logo"
            />
          </div>
          <p className="max-w-lg text-right">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
      </div>

      <div className="col-span-1">
        <form className="w-full rounded border border-brand p-5">
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="font-medium" htmlFor="fullName">
                Full Name<sup style={{ color: "#ca8b04" }}>*</sup>
              </label>
              <input
                className="block w-full rounded-md px-3 py-2.5 border focus:outline-none focus:ring-1 focus:ring-brand"
                type="text"
                name="fullName"
                placeholder="John Smith"
                onChange={handleChange}
              />
              {error && <span style={{ color: "#ca8b04" }}>{errMsg}</span>}
            </div>

            <div className="space-y-1">
              <label className="font-medium" htmlFor="email">
                Email<sup style={{ color: "#ca8b04" }}>*</sup>
              </label>
              <input
                className="block w-full rounded-md px-3 py-2.5 border focus:outline-none focus:ring-1 focus:ring-brand"
                type="email"
                name="email"
                placeholder="john@example.com"
                onChange={handleChange}
              />
              {error && <span style={{ color: "#ca8b04" }}>{errMsg}</span>}
            </div>

            <div className="grid-cols-2 gap-x-8 max-md:space-y-9 md:grid">
              <div className="space-y-1">
                <label className="font-medium" htmlFor="companyName">
                  Company Name
                </label>
                <input
                  className="block w-full rounded-md px-3 py-2.5 border focus:outline-none focus:ring-1 focus:ring-brand"
                  type="text"
                  name="fullName"
                  placeholder="John Smith"
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-1">
                <label className="font-medium" htmlFor="website">
                  Website
                </label>
                <input
                  className="block w-full rounded-md px-3 py-2.5 border focus:outline-none focus:ring-1 focus:ring-brand"
                  type="text"
                  name="website"
                  placeholder="johnsmith.com"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="font-medium" htmlFor="instruction">
                Instruction<sup style={{ color: "#ca8b04" }}>*</sup>
              </label>
              <textarea
                className="block min-h-[120px] w-full rounded-md px-3 py-2.5 lg:min-h-[180px] border focus:outline-none focus:ring-1 focus:ring-brand"
                type="text"
                name="fullName"
                placeholder="Instruction"
                onChange={handleChange}
              />
              {error && <span style={{ color: "#ca8b04" }}>{errMsg}</span>}
            </div>

            {/* Cloudflare area */}
            <div>Cloudflare area</div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="rounded bg-[#979EAB] px-4 py-3 text-white transition-all hover:opacity-80 w-full font-medium"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="col-span-1">
        <FileUpload />
      </div>
    </div>
  );
};

export default FormPage;
