import React, { useContext } from "react";
import "./Task.css";
import { format } from 'date-fns';
import TaskContext from "../../context/taskContext";

const Task = ({ task }) => {
  const {deleteTask} = useContext(TaskContext)

  const formattedDate = format(new Date(task.dueDate), 'dd/MM/yyyy');
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
      <p className="task-p-2">due Date: {formattedDate}</p>
      <div className="task-btn">
        <button className="btn btn-edit">Edit</button>
        <button onClick={() => deleteTask(task._id)}  className="btn btn-delete">Delete</button>
      </div>
    </div>
  );
};

export default Task;
