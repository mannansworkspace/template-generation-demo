import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/user/login", { email, password });
      const { accessToken, user  } = response.data;

      const defaultUser = {
        name: user?.name || '',
        description: user?.description || '',
        phone: user?.phone || '',
        templateBackgroundImage: user?.templateBackgroundImage || '',
        email: user?.email || '',
        templateTitle: user?.templateTitle || '',
        templatePhone: user?.templatePhone || '',
        templateDescription: user?.templateDescription || '',
        templates: user?.templates || []
      };
 
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", JSON.stringify(defaultUser));

      if(user.isAdmin)
      {
        navigate('/admin')
      } else {
        navigate('/main')
      }

      
    } catch (error) {
      console.error(error);
      // Handle error here, such as displaying an error message.
    }
  };
  

  return (
    <div className="login-card">
    <div className="card">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  </div>
  );
};

export default Login;