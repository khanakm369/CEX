import React, { useState } from "react";

const Signin = () => {
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });

  // Handle input changes
  const handleSignInData = (e) => {
    const { name, value } = e.target;

    setSignIn((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Sign In Data:", signIn);

    // Example API call to FastAPI
    // axios.post("http://127.0.0.1:8000/login", signIn)
    //   .then((response) => console.log(response.data))
    //   .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Signin</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={signIn.email}
          onChange={handleSignInData}
          required
        />

        <br />
        <br />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={signIn.password}
          onChange={handleSignInData}
          required
        />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signin;