import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Assests/css/Login and Signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    contact: "",
    password: "",
    confirmpassword: "",
    location: ""
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    contact: "",
    password: "",
    confirmpassword: "",
    location: ""
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.username) {
      isValid = false;
      newErrors.username = "Full name is required.";
    } else {
      newErrors.username = "";
    }

    if (!formData.email) {
      isValid = false;
      newErrors.email = "Email is required.";
    } else {
      newErrors.email = "";
    }

    if (!formData.contact) {
      isValid = false;
      newErrors.contact = "Mobile Number is required.";
    } else {
      newErrors.contact = "";
    }

    if (!formData.password) {
      isValid = false;
      newErrors.password = "Password is required.";
    } else {
      newErrors.password = "";
    }

    if (!formData.confirmpassword) {
      isValid = false;
      newErrors.confirmpassword = "Confirm Password is required.";
    } else if (formData.password !== formData.confirmpassword) {
      isValid = false;
      newErrors.confirmpassword = "Passwords do not match.";
    } else {
      newErrors.confirmpassword = "";
    }

    if (!formData.location) {
      isValid = false;
      newErrors.location = "Address is required.";
    } else {
      newErrors.location = "";
    }

    setErrors(newErrors);
    return isValid;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Validation passed, proceed with form submission
      console.log(formData);
    }
  }

  const navigateToLogin = useNavigate();

  const handleNavigate = () => {
    navigateToLogin('/login');
  }

  const handleNavigateValid = () => {
    if (validateForm()) {
      navigateToLogin('/login');
    }
  }

  return (
    <div className="signup-background">
      <div className="signup-container">
        <form onSubmit={handleSubmit}>
          <div className="fingerprint"><i class='bx bxl-baidu'></i></div>
          <div className="signup-text">CREATE A NEW ACCOUNT</div>
          <input className="common-input-field" type="text" placeholder="Full name" name="username" onChange={handleOnChange} />
          {errors.username && <div className="error-message">{errors.username}</div>}
          <input className="common-input-field" type="email" placeholder="Email" name="email" onChange={handleOnChange} />
          {errors.email && <div className="error-message">{errors.email}</div>}
          <input className="common-input-field" type="text" placeholder="Mobile Number" name="contact" onChange={handleOnChange} />
          {errors.contact && <div className="error-message">{errors.contact}</div>}
          <input className="common-input-field" type="password" placeholder="Password" name="password" onChange={handleOnChange} />
          {errors.password && <div className="error-message">{errors.password}</div>}
          <input className="common-input-field" type="password" placeholder="Confirm Password" name="confirmpassword" onChange={handleOnChange} />
          {errors.confirmpassword && <div className="error-message">{errors.confirmpassword}</div>}
          <input className="common-input-field" type="text" placeholder="Address" name="location" onChange={handleOnChange} />
          {errors.location && <div className="error-message">{errors.location}</div>}
          <button className="common-button" onClick={handleNavigateValid}>Create User</button>
          <div className="already-have-account">ALREADY HAVE AN ACCOUNT? <span style={{ color: 'blue', cursor: 'pointer' }} onClick={handleNavigate}>Click Here</span> </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
