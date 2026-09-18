import { useState } from "react";
import "./Task5.css";
function Task5() {
  // Form data state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
  });
  // Validation errors state
  const [errors, setErrors] = useState({});
  // Success message state
  const [success, setSuccess] = useState("");
  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });


    setSuccess("");
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must contain 10 digits";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.dob) {
      newErrors.dob = "Date of birth is required";
    }
    if (!formData.gender) {
      newErrors.gender = "Please select your gender";
    }
    if (!formData.address) {
      newErrors.address = "Address is required";
    }
    if (!formData.city) {
      newErrors.city = "City is required";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccess("");
      return;
    }
    setErrors({});
    setSuccess("Registration successful!");
  };
  // Reset form
  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      dob: "",
      gender: "",
      address: "",
      city: "",
    });
    setErrors({});
    setSuccess("");
  };
  return (
    <div className="task5">
      <div className="form-container">

        <div className="form-header">
          <h1>Registration Form</h1>
          <p>Please fill in all the details to register</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
              />
              {errors.firstName && (
                <span className="error">{errors.firstName}</span>
              )}
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
              />
              {errors.lastName && (
                <span className="error">{errors.lastName}</span>
              )}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
              {errors.email && (
                <span className="error">{errors.email}</span>
              )}
            </div>
            <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter 10-digit mobile number"
              />
              {errors.mobile && (
                <span className="error">{errors.mobile}</span>
              )}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
              />
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
              />
              {errors.confirmPassword && (
                <span className="error">{errors.confirmPassword}</span>
              )}
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
              {errors.dob && (
                <span className="error">{errors.dob}</span>
              )}
            </div>
            <div className="form-group">
              <label>Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && (
                <span className="error">{errors.gender}</span>
              )}
            </div>
            <div className="form-group full-width">
              <label>Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                rows="3"
              ></textarea>
              {errors.address && (
                <span className="error">{errors.address}</span>
              )}
            </div>
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
              />
              {errors.city && (
                <span className="error">{errors.city}</span>
              )}
            </div>
          </div>
          {success && (
            <div className="success">
              ✓ {success}
            </div>
          )}
          <div className="form-buttons">
            <button type="submit" className="submit-btn">
              Register
            </button>
            <button
              type="button"
              className="reset-btn"
              onClick={handleReset}
            >
              Reset
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}
export default Task5;