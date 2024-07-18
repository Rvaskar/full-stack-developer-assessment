import React, { useContext, useEffect, useState } from "react";
import TaskContext from "../../context/taskContext";
import { useParams } from "react-router-dom";

const UpdateTask = () => {
  const { updateTask, tasks } = useContext(TaskContext);
  const { id } = useParams();
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: false,
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const newTask = tasks.find((task) => task._id === id);
    if (newTask) {
      setTask({
        title: newTask.title,
        description: newTask.description,
        dueDate: newTask.dueDate,
        status: newTask.status,
      });
    }
  }, [tasks, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await updateTask(id, task);
    if (result) {
      setMessage("Task updated successfully!");
    } else {
      setMessage("Error updating task.");
    }
  };

  return (
    <div className="main-form-container">
      <h1>Update Task</h1>
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
        <button className="add-task-btn" type="submit">
          Submit
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateTask;
