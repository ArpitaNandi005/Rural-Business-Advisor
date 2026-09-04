import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BusinessProfile() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    businessType: "",
    location: "",
    products: "",
    experience: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Business Profile:", formData);

    navigate("/dashboard");
  };

  return (
    <div className="login-page">

      <div className="login-card profile-card">

        <h1>BIZNEX</h1>

        <p className="login-subtitle">
          YOUR AI-POWERED BUSINESS PARTNER
        </p>

        <h2>Business Profile</h2>

        <p>
          Tell us about your business
        </p>

        <form onSubmit={handleSubmit}>

          <label>Business Name</label>
          <input
            type="text"
            name="businessName"
            placeholder="Enter your business name"
            value={formData.businessName}
            onChange={handleChange}
            required
          />

          <label>Owner Name</label>
          <input
            type="text"
            name="ownerName"
            placeholder="Enter owner's name"
            value={formData.ownerName}
            onChange={handleChange}
            required
          />

          <label>Business Type</label>

          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            required
          >
            <option value="">
              Select business type
            </option>

            <option value="farming">
              Farming
            </option>

            <option value="food">
              Food Business
            </option>

            <option value="retail">
              Retail
            </option>

            <option value="handicraft">
              Handicraft
            </option>

            <option value="service">
              Service
            </option>

            <option value="other">
              Other
            </option>
          </select>

          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="Village / City / District"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <label>Products / Services</label>
          <input
            type="text"
            name="products"
            placeholder="What do you sell?"
            value={formData.products}
            onChange={handleChange}
            required
          />

          <label>Business Experience</label>

          <select
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          >
            <option value="">
              Select experience
            </option>

            <option value="beginner">
              Less than 1 year
            </option>

            <option value="1-3">
              1 - 3 years
            </option>

            <option value="3-5">
              3 - 5 years
            </option>

            <option value="5+">
              More than 5 years
            </option>
          </select>

          <button type="submit">
            Save & Continue
          </button>

        </form>

      </div>

    </div>
  );
}

export default BusinessProfile;