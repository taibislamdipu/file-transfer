import { useState } from "react";

const FormPage = () => {
  // error state
  let error = true;

  // form state
  const [info, setInfo] = useState({
    id: crypto.randomUUID(),
    name: "",
    email: "",
    company: "",
    website: "",
    instruction: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    setInfo({
      ...info,
      [name]: value,
    });
  };

  // form submission
  const handleSubmit = () => {
    console.log("info--->", info);
  };

  return (
    <main className="lg:bg-[url('./assets/bg-image.png')] bg-cover">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto gap-5 place-content-center min-h-screen p-4 lg:p-10">
        <div className="col-span-1 lg:col-span-2 flex items-center justify-between">
          <div className="space-y-3">
            <h1 className="text-4xl 2xl:text-5xl text-[#92C46A] leading-tight">
              Take Free Trail
            </h1>
            <p className="max-w-lg text-gray-700">
              Choosing a professional photo editing company can ensure quality,
              quick turnarounds, and exceptional results.
            </p>
          </div>
          <div className="max-w-sm flex items-end flex-col gap-3">
            <div>
              <img
                className="h-16 2xl:h-20"
                src="./assets/bzm-logo.png"
                alt="BZM Logo"
              />
            </div>
            <p className="max-w-lg text-right">
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
        </div>

        <div className="col-span-1">
          <form className="w-full rounded border border-[#92C46A] shadow-lg p-5 bg-white">
            <div className="space-y-4">
              <div className="grid-cols-2 gap-4 max-md:space-y-9 md:grid">
                <div className="space-y-1">
                  <label className="font-medium" htmlFor="name">
                    Full Name<sup style={{ color: "#ca8b04" }}>*</sup>
                  </label>
                  <input
                    className="block w-full rounded-md px-3 py-2.5 border focus:outline-none focus:ring-1 focus:ring-[#92C46A] transition"
                    type="text"
                    name="name"
                    placeholder="John Smith"
                    value={info.name}
                    onChange={handleChange}
                    required
                  />
                  {error && (
                    <span style={{ color: "#FF0000", fontStyle: "italic" }}>
                      Please complete this required field.
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="font-medium" htmlFor="email">
                    Email<sup style={{ color: "#ca8b04" }}>*</sup>
                  </label>
                  <input
                    className="block w-full rounded-md px-3 py-2.5 border focus:outline-none focus:ring-1 focus:ring-[#92C46A] transition"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={info.email}
                    onChange={handleChange}
                    required
                  />
                  {error && (
                    <span style={{ color: "#FF0000", fontStyle: "italic" }}>
                      Please complete this required field.
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="font-medium" htmlFor="company">
                    Company Name
                  </label>
                  <input
                    className="block w-full transition rounded-md px-3 py-2.5 border focus:outline-none focus:ring-1 focus:ring-[#92C46A]"
                    type="text"
                    name="company"
                    placeholder="BZM Graphics"
                    value={info.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-medium" htmlFor="website">
                    Website
                  </label>
                  <input
                    className="block w-full  rounded-md px-3 py-2.5 border focus:outline-none focus:ring-1 transition focus:ring-[#92C46A]"
                    type="text"
                    name="website"
                    placeholder="johnsmith.com"
                    value={info.website}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-medium" htmlFor="instruction">
                  Instruction<sup style={{ color: "#ca8b04" }}>*</sup>
                </label>
                <textarea
                  className="block min-h-[120px] w-full transition rounded-md px-3 py-2.5 lg:min-h-[140px] border focus:outline-none focus:ring-1 focus:ring-[#92C46A]"
                  type="text"
                  name="instruction"
                  placeholder="Remove background & retouch service."
                  value={info.instruction}
                  onChange={handleChange}
                  required
                />
                {error && (
                  <span style={{ color: "#FF0000", fontStyle: "italic" }}>
                    Please complete this required field.
                  </span>
                )}
              </div>

              {/* Cloudflare area */}
              <div>Cloudflare area</div>
            </div>

            <div className="mb-4 mt-8">
              <button
                type="submit"
                className="rounded bg-[#979EAB] px-4 py-3 text-white transition-all hover:opacity-80 w-full font-medium"
                onClick={handleSubmit}
                disabled={false}
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="col-span-1 bg-[#F4F4F4]">File Upload Section</div>
      </div>
    </main>
  );
};

export default FormPage;
