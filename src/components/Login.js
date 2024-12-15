import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Handle redirect response and login state
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      console.log("Authorization code received:", code);

      // Store the login status in localStorage
      localStorage.setItem("isLoggedIn", "true");

      // Navigate to the admin dashboard
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleLogin = () => {
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const redirectUri = window.location.origin; // Update for deployment

    // Use 'prompt=consent' to ensure permissions are asked every time
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&scope=openid%20profile%20email&prompt=consent`;

    // Redirect to Google login page
    window.location.href = authUrl;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login</h1>
      <button onClick={handleLogin} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
