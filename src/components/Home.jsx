import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleLogin = () => navigate("/login");
  const handleSignup = () => navigate("/signup");

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4 text-center" style={{ width: "400px" }}>
        <h2 className="mb-3">Selamat Datang di Secure Login App 🔐</h2>
        <p className="text-muted mb-4">
          Silakan login atau daftar untuk melanjutkan ke dashboard.
        </p>

        <div className="d-flex justify-content-center gap-3">
          <button className="btn btn-success w-50" onClick={handleLogin}>
            Login
          </button>
          <button className="btn btn-primary w-50" onClick={handleSignup}>
            Daftar
          </button>
        </div>
      </div>
    </div>
  );
}