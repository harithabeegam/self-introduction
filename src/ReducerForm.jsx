import { useReducer, useState } from "react";
import "./ReducerForm.css";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  dob: "",
  gender: "",
  address: "",
  city: "",
};

function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

function ReducerForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });

    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!state.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!state.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!state.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!state.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(state.phone)) {
      newErrors.phone = "Phone number must contain 10 digits";
    }

    if (!state.password) {
      newErrors.password = "Password is required";
    } else if (state.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!state.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (state.password !== state.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!state.dob) {
      newErrors.dob = "Date of birth is required";
    }

    if (!state.gender) {
      newErrors.gender = "Please select gender";
    }

    if (!state.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!state.city.trim()) {
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

  const handleReset = () => {
    dispatch({
      type: "RESET",
    });

    setErrors({});
    setSuccess("");
  };

  return (
    <div className="reducer-form">
      <div className="form-container">

        <div className="form-header">
          <h1>Registration Form</h1>
          <p>Fill in your details to create an account</p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-grid">

            {/* First Name */}
            <div className="form-group">
              <label>First Name</label>

              <input
                type="text"
                name="firstName"
                value={state.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
              />

              {errors.firstName && (
                <span className="error">
                  {errors.firstName}
                </span>
              )}
            </div>

            {/* Last Name */}
            <div className="form-group">
              <label>Last Name</label>

              <input
                type="text"
                name="lastName"
                value={state.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
              />

              {errors.lastName && (
                <span className="error">
                  {errors.lastName}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                value={state.email}
                onChange={handleChange}
                placeholder="Enter email"
              />

              {errors.email && (
                <span className="error">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Phone */}
            <div className="form-group">
              <label>Phone Number</label>

              <input
                type="text"
                name="phone"
                value={state.phone}
                onChange={handleChange}
                placeholder="Enter 10-digit phone number"
              />

              {errors.phone && (
                <span className="error">
                  {errors.phone}
                </span>
              )}
            </div>

            {/* Password */}
            <div className="form-group">
              <label>Password</label>

              <input
                type="password"
                name="password"
                value={state.password}
                onChange={handleChange}
                placeholder="Enter password"
              />

              {errors.password && (
                <span className="error">
                  {errors.password}
                </span>
              )}
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <label>Confirm Password</label>

              <input
                type="password"
                name="confirmPassword"
                value={state.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
              />

              {errors.confirmPassword && (
                <span className="error">
                  {errors.confirmPassword}
                </span>
              )}
            </div>

            {/* Date of Birth */}
            <div className="form-group">
              <label>Date of Birth</label>

              <input
                type="date"
                name="dob"
                value={state.dob}
                onChange={handleChange}
              />

              {errors.dob && (
                <span className="error">
                  {errors.dob}
                </span>
              )}
            </div>

            {/* Gender */}
            <div className="form-group">
              <label>Gender</label>

              <select
                name="gender"
                value={state.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              {errors.gender && (
                <span className="error">
                  {errors.gender}
                </span>
              )}
            </div>

            {/* Address */}
            <div className="form-group full-width">
              <label>Address</label>

              <textarea
                name="address"
                value={state.address}
                onChange={handleChange}
                placeholder="Enter your address"
                rows="3"
              ></textarea>

              {errors.address && (
                <span className="error">
                  {errors.address}
                </span>
              )}
            </div>

            {/* City */}
            <div className="form-group">
              <label>City</label>

              <input
                type="text"
                name="city"
                value={state.city}
                onChange={handleChange}
                placeholder="Enter city"
              />

              {errors.city && (
                <span className="error">
                  {errors.city}
                </span>
              )}
            </div>

          </div>

          {/* Success Message */}
          {success && (
            <div className="success">
              ✓ {success}
            </div>
          )}

          {/* Buttons */}
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

export default ReducerForm;