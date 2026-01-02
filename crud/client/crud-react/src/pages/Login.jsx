import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
   import api from "../api/axiosInstance";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", { email, password });
     const  token = res.data.token
     console.log(token)
     localStorage.setItem('token', token)
      navigate("/profile");   // REDIRECT
    } catch (err) {
      alert("Invalid login");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} /><br/>
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} /><br/>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;