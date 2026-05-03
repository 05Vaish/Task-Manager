import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Dummy tasks (replace with API later)
    const dummyTasks = [
      {
        id: 1,
        title: "Design Login Page",
        status: "Pending",
        description: "Create UI for login page",
      },
      {
        id: 2,
        title: "Fix Dashboard Bug",
        status: "Completed",
        description: "Resolve API issue",
      },
    ];

    setTasks(dummyTasks);
  }, []);

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("role"); // remove role
    navigate("/login"); // redirect to login
  };

  return (
    <div style={{ padding: "20px" }}>
      
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>User Dashboard</h1>

        <button
          onClick={handleLogout}
          style={{
            padding: "8px 15px",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      <h2>My Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <div style={{ display: "grid", gap: "15px" }}>
          {tasks.map((task) => (
            <div
              key={task.id}
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                borderRadius: "10px",
                background: "#f9f9f9",
              }}
            >
              <h3>{task.title}</h3>
              <p>{task.description}</p>

              <p>
                Status:{" "}
                <strong
                  style={{
                    color:
                      task.status === "Completed"
                        ? "green"
                        : "orange",
                  }}
                >
                  {task.status}
                </strong>
              </p>

              <button
                onClick={() =>
                  navigate(`/user/task-details/${task.id}`)
                }
                style={{
                  marginTop: "10px",
                  padding: "8px 12px",
                  cursor: "pointer",
                }}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
