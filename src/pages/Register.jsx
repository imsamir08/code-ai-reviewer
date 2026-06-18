import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import api from "../api";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const url = api.defaults.baseURL;  // Get the base URL from the api instance

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  console.log("api url:", api.defaults.baseURL)  // keyword is missing to log the API URL

  const handleSubmit = async (e) => {
    e.preventDefault();
     
    try {
      await axios.post(
         `${url}/auth/register`,
        formData
      );

      alert("Registration Successful");

      navigate("/");
    } catch (error) {
      console.error(error);
        console.log(error.response?.data);
      
      // alert(
      //   error.response?.data?.message ||
      //   "Registration Failed"
      // );
    }
  };

  return (
    <>
      <Navbar />

      <div className="auth-container">
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Register
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Register;