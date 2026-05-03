import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Auth Pages
import Login from "./pages/authentication/login";
import Signup from "./pages/authentication/signUp";

// Admin Pages
import Dashboard from "./pages/admin/dashboard";
import ManageTasks from "./pages/admin/manageTasks";
import ManageUsers from "./pages/admin/manageUsers";
import CreateTask from "./pages/admin/CreateTask";

// User Pages
import UserDashboard from "./pages/user/UserDashboard";
import MyTasks from "./pages/user/MyTasks";
import TaskDetails from "./pages/user/TaskDetails";

// Protected Route
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />

        {/* ADMIN ROUTES */}
        <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/tasks" element={<ManageTasks />} />
          <Route path="/admin/users" element={<ManageUsers />} />
          <Route path="/admin/create-task" element={<CreateTask />} />
        </Route>

        {/* USER ROUTES */}
        <Route element={<PrivateRoute allowedRoles={["user"]} />}>
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/tasks" element={<MyTasks />} />
          <Route path="/user/task-details/:id" element={<TaskDetails />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;