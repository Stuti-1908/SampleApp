import React, { useState } from "react";
import { useAuth } from "../components/AuthContext.tsx";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login, isAuthenticated } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (login(username, password)) {
      navigate("/");
    } else {
      setError("Invalid credentials. Try user/password.");
    }
  }

  if (isAuthenticated) {
    navigate("/");
    return null;
  }

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 8px #1976d233",
        padding: "32px",
        maxWidth: "360px",
        margin: "48px auto",
      }}
    >
      <h2 style={{ color: "#1976d2" }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          style={{
            width: "100%",
            marginBottom: "8px",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #1976d2",
          }}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          style={{
            width: "100%",
            marginBottom: "8px",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #1976d2",
          }}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          style={{
            background: "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "8px 16px",
            cursor: "pointer",
            width: "100%",
          }}
          type="submit"
        >
          Login
        </button>
        {error && (
          <div style={{ color: "red", marginTop: "8px" }}>{error}</div>
        )}
      </form>
    </div>
  );
}
