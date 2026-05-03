import React, { useState } from "react";

const CreateTask = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title,
    };

    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    localStorage.setItem("tasks", JSON.stringify([...existingTasks, newTask]));

    alert("Task Created!");
    setTitle("");
  };

  return (
    <div className="container">
      <h2>Create Task</h2>

      <div className="card">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;