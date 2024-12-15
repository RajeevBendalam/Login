import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login state on component mount
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loginStatus);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Redirect to dashboard if logged in */}
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login setIsLoggedIn={setIsLoggedIn} />}
        />
        {/* Admin dashboard route */}
        <Route
          path="/dashboard"
          element={isLoggedIn ? <AdminDashboard setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
