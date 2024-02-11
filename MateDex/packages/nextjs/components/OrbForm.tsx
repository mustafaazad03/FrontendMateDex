import React, { useState } from "react";

const OrbForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    slots: "",
    transactionRate: "",
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

    console.log("Form Data:", formData);
  };

  return (
    <div className="w-[60%] text-center p-10">
      <form onSubmit={handleSubmit}>
        <div className="m-4">
          <input
            className="input-box"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter you name"
            required
          />
        </div>
        <div className="m-4">
          <input
            className="input-box"
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter your orb price"
            required
          />
        </div>
        <div className="m-4">
          <input
            className="input-box"
            type="number"
            id="slots"
            name="slots"
            value={formData.slots}
            onChange={handleChange}
            placeholder="Enter your slot time"
            required
          />
        </div>
        <div className="m-4">
          <input
            className="input-box"
            type="number"
            id="transactionRate"
            name="transactionRate"
            value={formData.transactionRate}
            onChange={handleChange}
            placeholder="Enter the transaction rate"
            required
          />
        </div>
        <button className="form-button" type="submit">
          Create ORB
        </button>
      </form>
    </div>
  );
};

export default OrbForm;
