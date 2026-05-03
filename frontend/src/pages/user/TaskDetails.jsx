import React from "react";
import { useParams } from "react-router-dom";

const TaskDetails = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Details</h1>
      <p>Task ID: {id}</p>
    </div>
  );
};

export default TaskDetails;
