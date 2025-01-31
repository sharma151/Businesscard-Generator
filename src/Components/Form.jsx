import { useContext, useState } from "react";
import "../style/Components/Form.scss";
import { UserDataContext } from "../Context/userdatacontext";

const Form = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    designation: "",
    email: "",
    countryCode: "",
    phoneNumber: "",
    address: "",
    website: "",
    company: "",
    gst: "",
  });
  const { setUserData } = useContext(UserDataContext);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.fname) formErrors.fname = "First name is required";
    if (!formData.lname) formErrors.lname = "Last name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = "Please enter a valid email";
    if (!formData.phoneNumber || !/^\d{10}$/.test(formData.phoneNumber))
      formErrors.phoneNumber = "Please enter a valid phone number";
    // if (!formData.gst || !/^[A-Z0-9]{15}$/.test(formData.gst))
    //   formErrors.gst = "Please enter a valid GST number";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      alert("Form submitted successfully!");
      setUserData(formData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Personal Information</h2>
      <div className="innercontainer">
        <div className="input-group">
          <label htmlFor="fname">First Name *</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
          />
          {errors.fname && <span className="error">{errors.fname}</span>}
        </div>

        <div className="input-group">
          <label htmlFor="lname">Last Name *</label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
          />
          {errors.lname && <span className="error">{errors.lname}</span>}
        </div>

        <div className="input-group">
          <label htmlFor="designation">Designation *</label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="contact">
          <div className="input-group">
            <label htmlFor="countryCode">Country Code *</label>
            <input
              type="text"
              id="countryCode"
              name="countryCode"
              placeholder="+"
              value={formData.countryCode}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="phoneNumber">Phone *</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <span className="error">{errors.phoneNumber}</span>
            )}
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="website">Address *</label>
          <input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="gst">GST Number</label>
          <input
            type="text"
            id="gst"
            name="gst"
            value={formData.gst}
            onChange={handleChange}
          />
          {errors.gst && <span className="error">{errors.gst}</span>}
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
