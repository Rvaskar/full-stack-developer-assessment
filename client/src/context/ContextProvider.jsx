import React, { useEffect, useState } from "react";
import TaskContext from "./taskContext";
import axios from 'axios';

const ContextProvider = ({ children }) => {
  const [User, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const BASE_URL = "http://localhost:5000";

  useEffect(() => {
    const fetchUser = () => {
      const result = JSON.parse(localStorage.getItem("Profile"));
      if (result) {
        const { token } = result;

        // Decode token to get its expiry time
        const decodedToken = JSON.parse(atob(token.split('.')[1]));

        // Check if token is expired
        if (decodedToken.exp * 1000 < new Date().getTime()) {
          // Token is expired, remove it from local storage and set user to null
          localStorage.removeItem("Profile");
          setUser(null);
        } else {
          // Token is valid, set user
          setUser(result);
        }
      }
    };

   

    fetchUser();
  
  }, [BASE_URL]);

  useEffect(() => {

    const fetchTasks = async () => {
      const result = JSON.parse(localStorage.getItem("Profile"));
      if (result) {
        try {
          const response = await axios.get(`${BASE_URL}/task/get`, {
            headers: {
              authorization: `Bearer ${result?.token}`,
            },
          });
          setTasks(response.data);
        } catch (error) {
          console.error("Error fetching tasks:", error);
        }
      }
    };

    
    fetchTasks();
  }, [BASE_URL,User]);

  const deleteTask = async (id) => {
   
    const result = JSON.parse(localStorage.getItem("Profile"));
    if (result) {
      try {
        const response = await axios.delete(`${BASE_URL}/task/delete/${id}`, {
          headers: {
            authorization: `Bearer ${result?.token}`,
          },
        });
        if (response.status === 200) {
          const newTask = tasks.filter((task) => task._id !== id);
          setTasks(newTask);
        } else {
          console.error("Failed to delete task:", response.statusText);
        }
      } catch (error) {
        console.error("Error Deleting Task :", error);
      }
    }
  };

  const AddTask = async (data) => {
    const User = JSON.parse(localStorage.getItem("Profile"));
    if (User) {
      try {
        const response = await axios.post(`${BASE_URL}/task/add`, data, {
          headers: {
            authorization: `Bearer ${User?.token}`,
          },
        });
        setTasks((prevTasks) => [...prevTasks, response.data]);
        return true;
      } catch (error) {
        console.error("Error Adding task:", error);
        return false;
      }
    }
    return false;
  };

  const updateTask = async (id, data) => {
    const User = JSON.parse(localStorage.getItem("Profile"));
    if (User) {
      try {
        const response = await axios.put(`${BASE_URL}/task/edit/${id}`, data, {
          headers: {
            authorization: `Bearer ${User?.token}`,
          },
        });
        if (response.status === 200) {
          setTasks((prevTasks) =>
            prevTasks.map((task) => (task._id === id ? { ...task, ...data } : task))
          );
          return true;
        } else {
          console.error("Failed to update task:", response.statusText);
          return false;
        }
      } catch (error) {
        console.error("Error occurred in updating task:", error);
        return false;
      }
    }
    return false;
  };
  
    

  return (
    <TaskContext.Provider value={{ BASE_URL, tasks, User, setUser, AddTask, updateTask, deleteTask}}>
      {children}
    </TaskContext.Provider>
  );
};

export default ContextProvider;
