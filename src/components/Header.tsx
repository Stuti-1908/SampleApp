import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext.tsx";

export default function Header() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <header
      style={{
        background: "#1976d2",
        color: "#fff",
        padding: "12px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <b>Hey There App</b>
      </div>
      <nav style={{ display: "flex", gap: "16px" }}>
        <Link
          style={{ color: "#fff", textDecoration: "none" }}
          to="/"
        >
          Checker
        </Link>
        <Link
          style={{ color: "#fff", textDecoration: "none" }}
          to="/contact"
        >
          Contact
        </Link>
        {!isAuthenticated ? (
          <Link
            style={{ color: "#fff", textDecoration: "none" }}
            to="/login"
          >
            Login
          </Link>
        ) : (
          <button
            style={{
              background: "#fff",
              color: "#1976d2",
              border: "none",
              borderRadius: "4px",
              padding: "4px 12px",
            }}
            onClick={() => {
              logout();
              navigate("/login");
            }}
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
}
