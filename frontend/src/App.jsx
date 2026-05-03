import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Pages
import Login from "./pages/authentication/login";
import Signup from "./pages/authentication/signUp";
import Dashboard from "./pages/admin/dashboard";
import UserDashboard from "./pages/user/UserDashboard";

// Protected Route
import PrivateRoute from "./routes/PrivateRoute";


// ✅ Home Page (Front Page UI)
const Home = () => {
  return (
    <div style={styles.homeContainer}>
      <h1 style={styles.title}>Task Manager</h1>
      <p style={styles.subtitle}>Manage your tasks efficiently</p>

      <div style={styles.buttonContainer}>
        <Link to="/login">
          <button style={styles.btnPrimary}>Login</button>
        </Link>

        <Link to="/sign-up">
          <button style={styles.btnSecondary}>Signup</button>
        </Link>
      </div>
    </div>
  );
};


// ✅ Main App
const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />

        {/* Admin Protected Routes */}
        <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Route>

        {/* User Protected Routes */}
        <Route element={<PrivateRoute allowedRoles={["user"]} />}>
          <Route path="/user/dashboard" element={<UserDashboard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;


// ✅ Styles (ADD AT BOTTOM)
const styles = {
  homeContainer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "white",
    textAlign: "center",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "18px",
    margin: "10px 0 20px",
  },
  buttonContainer: {
    display: "flex",
    gap: "20px",
  },
  btnPrimary: {
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    background: "#fff",
    color: "#333",
    fontWeight: "bold",
    cursor: "pointer",
  },
  btnSecondary: {
    padding: "10px 20px",
    borderRadius: "8px",
    border: "2px solid white",
    background: "transparent",
    color: "white",
    cursor: "pointer",
  },
};
