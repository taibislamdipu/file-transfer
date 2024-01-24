// UserForm.js
import { useState } from "react";

const UserInfo = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    website: "",
    textarea: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission
    // You can send formData to the backend or perform other actions
    console.log("Form data:", formData);

    // Access FileUpload data
    const fileUploadData = window.uppy.getState();
    console.log("FileUpload data:", fileUploadData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="border-black border w-min mb-3">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleInputChange}
        />
      </div>
      <div className="border-black border w-min mb-3">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="border-black border w-min mb-3">
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </div>
      <div className="border-black border w-min mb-3">
        <input
          type="text"
          name="website"
          placeholder="Website"
          value={formData.website}
          onChange={handleInputChange}
        />
      </div>
      <div className="border-black border w-min mb-3">
        <textarea
          name="textarea"
          placeholder="Textarea"
          value={formData.textarea}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <button className="px-4 py-2 bg-purple-400" type="submit">
        Submit
      </button>
    </form>
  );
};

export default UserInfo;
