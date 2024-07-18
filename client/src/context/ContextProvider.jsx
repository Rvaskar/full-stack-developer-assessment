import React, { Children, useState } from "react";
import TaskContext from "./taskContext";

const ContextProvider = ({ children }) => {
    const [User, setUser] = useState(null)

    const [data, setData] = useState([
        {
            _id: "60c72b2f9b1d8a001cf9d8a6",
            title: "Complete Project Report",
            description: "Finish the final report for the project and submit it.",
            dueDate: "2024-07-20",
            status: "pending",
            userId: "60c72b2f9b1d8a001cf9d8a1" // Sample MongoDB ID
          },
          {
            _id: "60c72b2f9b1d8a001cf9d8a7",
            title: "Update Website",
            description: "Implement the new design changes in the company website.",
            dueDate: "2024-07-18",
            status: "inprogress",
            userId: "60c72b2f9b1d8a001cf9d8a2" // Sample MongoDB ID
          },
          {
            _id: "60c72b2f9b1d8a001cf9d8a8",
            title: "Team Meeting",
            description: "Conduct a team meeting to discuss the project milestones.",
            dueDate: "2024-07-17",
            status: "complete",
            userId: "60c72b2f9b1d8a001cf9d8a3" // Sample MongoDB ID
          },
          {
            _id: "60c72b2f9b1d8a001cf9d8a9",
            title: "Code Review",
            description: "Review the code submitted by the development team.",
            dueDate: "2024-07-21",
            status: "pending",
            userId: "60c72b2f9b1d8a001cf9d8a4" // Sample MongoDB ID
          },
          {
            _id: "60c72b2f9b1d8a001cf9d8b0",
            title: "Client Feedback",
            description: "Gather feedback from the client on the latest deliverable.",
            dueDate: "2024-07-19",
            status: "inprogress",
            userId: "60c72b2f9b1d8a001cf9d8a5" // Sample MongoDB ID
          }
     ])
  const BASE_URL = "http://localhost:5000"; //replace with actual deploy url
  return (
    <TaskContext.Provider value={{ BASE_URL, data, User, setUser }}>{children}</TaskContext.Provider>
  );
};

export default ContextProvider;
