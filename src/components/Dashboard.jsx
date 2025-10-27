import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/"); // kalau belum login, balik ke Home
      } else {
        setUser(currentUser);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/"); // logout balik ke Home
  };

  if (!user) {
    return null; // sementara kosong saat nunggu auth
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4 text-center" style={{ width: "400px" }}>
        <h2 className="mb-3">Dashboard</h2>
        <p>
          Selamat datang, <strong>{user.email}</strong>
        </p>
        <button className="btn btn-danger w-100 mt-3" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}