import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  return (
    <div className="container">
      <h2>My Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task) => (
          <div className="card" key={task.id}>
            <Link to={`/user/task-details/${task.id}`}>
              <h4>{task.title}</h4>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default MyTasks;