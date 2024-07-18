import React, { useContext, useState } from "react";
import './AddTask.css';
import TaskContext from "../../context/taskContext";

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: false,
  });

  const [message, setMessage] = useState("");
  const { AddTask } = useContext(TaskContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await AddTask(task);
    if (result) {
      setMessage("Task added successfully!");
      setTask({
        title: "",
        description: "",
        dueDate: "",
        status: false,
      });
    } else {
      setMessage("Error adding task.");
    }
  };

  return (
    <div className="main-form-container">
      <h1>Add New Task</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          <h4>Title:</h4>
          <input
            type="text"
            name="title"
            id="title"
            value={task.title}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="description">
          <h4>Description:</h4>
          <input
            type="text"
            name="description"
            id="description"
            value={task.description}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="dueDate">
          <h4>Due Date:</h4>
          <input
            type="date"
            name="dueDate"
            id="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            required
          />
        </label>
        <button className="add-task-btn" type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddTask;
