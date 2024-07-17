import React, { useState } from "react";
import axios from 'axios';

const AddTask = () => {
    const [task, setTask] = useState({
        title: "",
        description: "",
        dueDate: "",
        status: false,
      });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('YOUR_API_URL_HERE', task); // Replace with your actual URL

      setMessage("Task added successfully!");

      setTask({
        title: "",
        description: "",
        dueDate: "",
      });

    } catch (error) {
      setMessage("Error. Please try again.");
      console.error("There was an error!", error);
    }
  };

  
  return (
    <div>
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
        
        <button type="submit">Submit</button>
      </form>
      
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddTask;
