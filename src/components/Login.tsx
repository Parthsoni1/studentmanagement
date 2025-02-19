import React, { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import AuthService from "../services/authService";
import { Link } from "react-router-dom";
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/primereact.css";
import "./Login.css"; // Custom CSS

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(credentials.username);
    AuthService.login(credentials.username, credentials.password)
      .then((response: any) => {
        console.log(response);
        localStorage.setItem("user", JSON.stringify(response.user) || response.user);
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  return (
    <div className="login-container">
      <Card className="login-card">
        <div className="login-header">
          <i className="pi pi-user" style={{ fontSize: "2rem", color: "#007ad9" }}></i>
          <h2>Welcome Back!</h2>
          <p>Sign in to continue</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="p-field">
            <label htmlFor="username">Username</label>
            <InputText
              id="username"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              placeholder="Enter your username"
              className="p-inputtext-lg"
              required
            />
          </div>

          <div className="p-field">
            <label htmlFor="password">Password</label>
            <Password
              id="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              placeholder="Enter your password"
              className="p-inputtext-lg"
              toggleMask
              required
              feedback={false}
            />
          </div>

          <Button type="submit" label="Sign In" icon="pi pi-sign-in" className="p-button-rounded p-button-primary p-button-lg" />
          <Divider />
          <p className="register-link">
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default Login;
