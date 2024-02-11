import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    twitterHandle: "",
    otherlinks: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  return (
    <div className="text-left">
      <h1 className="text-2xl text-center font-bold">Create Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="">
          <input
            className="input-box"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        {/* <br />
        <div>
          <input
            className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
            type="file"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Add you profile picture"
            required
          />
        </div> */}
        <br />
        <div>
          <input
            className="input-box"
            type="text"
            name="twitterHandle"
            value={formData.twitterHandle}
            onChange={handleChange}
            placeholder="Enter your Twitter Handle"
            required
          />
        </div>
        <br />
        <div>
          <input
            className="input-box"
            type="text"
            name="otherlinks"
            value={formData.otherlinks}
            onChange={handleChange}
            placeholder="Add other links"
          />
        </div>
        <br />
        <div>
          <button className="form-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
