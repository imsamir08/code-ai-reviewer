import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
const navigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = async (e) => {
e.preventDefault();


try {
  const response = await axios.post(
    "http://localhost:3000/auth/login",
    {
      email,
      password,
    }
  );

  localStorage.setItem(
    "token",
    response.data.token
  );

  localStorage.setItem(
    "user",
    JSON.stringify(response.data.user)
  );

  alert("Login Successful");

  navigate("/dashboard");
} catch (error) {
  console.error(error);

  alert(
    error.response?.data?.message ||
    "Login Failed"
  );
}


};

return (
<> <Navbar />

  <div className="auth-container">
    <h1>Login</h1>

    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
        required
      />

      <button type="submit">
        Login
      </button>
    </form>
  </div>

  <Footer />
</>

);
}

export default Login;
