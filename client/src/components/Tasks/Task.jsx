import React from "react";
import "./Task.css";

const Task = ({ task }) => {
  return (
    <div className="task-container">
      <div className="task-title-cont">
        <h2>{task.title}</h2>
        <p>
          {task.status ? (
            <span style={{ color: "green" }}>Complete</span>
          ) : (
            <span style={{ color: "red" }}>Pending</span>
          )}
        </p>
      </div>
      <p className="task-p-1">{task.description}</p>
      <p className="task-p-2">{task.dueDate}</p>
      <div className="task-btn">
        <button className="btn btn-edit">Edit</button>
        <button className="btn btn-delete">Delete</button>
      </div>
    </div>
  );
};

export default Task;
