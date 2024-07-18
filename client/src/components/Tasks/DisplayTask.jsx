import React, { useContext } from "react";
import TaskContext from "../../context/taskContext";
import Task from "./Task";
import "./Task.css";
import { Link } from "react-router-dom";

const DisplayTask = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <main className="main-task-container">
      <h1>Task Manager</h1>
      <Link to={"/addTask"} className="btn-add-task">
        Add New Task
      </Link>
      <section className="main-task-container-2">
        {tasks.map((task) => {
          return <Task key={task._id} task={task} />;
        })}
      </section>
    </main>
  );
};

export default DisplayTask;
