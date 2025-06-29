import { useContext, useState } from "react";
import { UserDataContext } from "../Context/userdatacontext";
import Input from "./Input";

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
    <form
      className="bg-white rounded-xl shadow-lg p-6 space-y-6 border border-gray-200"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
        Personal Information
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="First Name *"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
          error={errors.fname}
        />
        <Input
          label="Last Name *"
          name="lname"
          value={formData.lname}
          onChange={handleChange}
          error={errors.lname}
        />
        <Input
          label="Designation *"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
        />
        <Input
          label="Email *"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        {/* Contact details */}
        <Input
          label="Country Code *"
          name="countryCode"
          placeholder="+"
          value={formData.countryCode}
          onChange={handleChange}
        />
        <Input
          label="Phone *"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          error={errors.phoneNumber}
        />

        <Input
          label="Address *"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <Input
          label="Website"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />
        <Input
          label="Company"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
        <Input
          label="GST Number"
          name="gst"
          value={formData.gst}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
