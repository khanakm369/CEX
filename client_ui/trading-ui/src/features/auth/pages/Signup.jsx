import React, { useState } from "react";

const Signup = () => {
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  // Handle input changes
  const handleFormData = (e) => {
    const { name, value } = e.target;

    setSignUpData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (signUpData.password !== signUpData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Signup Data:", signUpData);

    // Here you can call your FastAPI signup API
    // axios.post("/signup", signUpData)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={signUpData.email}
          onChange={handleFormData}
          required
        />

        <br />
        <br />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={signUpData.password}
          onChange={handleFormData}
          required
        />

        <br />
        <br />

        {/* Confirm Password */}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Re-enter your password"
          value={signUpData.confirmPassword}
          onChange={handleFormData}
          required
        />

        <br />
        <br />

        {/* Gender */}
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={signUpData.gender === "Male"}
            onChange={handleFormData}
          />
          Male
        </label>

        <label style={{ marginLeft: "10px" }}>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={signUpData.gender === "Female"}
            onChange={handleFormData}
          />
          Female
        </label>

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;