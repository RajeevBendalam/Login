import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on component mount
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");

    if (loginStatus === "true") {
      setIsLoggedIn(true);  // Set state to true if logged in
    } else {
      setIsLoggedIn(false); // Otherwise, set to false
      navigate("/"); // Redirect immediately if not logged in
    }
  }, [navigate]);

  const handleLogout = () => {
    // Clear login status from localStorage
    localStorage.removeItem("isLoggedIn");

    // Set React state to reflect logout
    setIsLoggedIn(false);

    // Reload the page to force a re-check of login status
    window.location.reload(); // This will trigger a full page reload
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the Admin Dashboard</h1>
      <button
        onClick={handleLogout}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;
