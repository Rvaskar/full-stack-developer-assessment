import dotenv from "dotenv";
import Task from "../models/task.js";
import mongoose from "mongoose";

dotenv.config();

export const AddTask = async (req, res) => {
  const addTaskData = req.body;
  const newTask = new Task({ ...addTaskData, userId: req.userId });

  try {
    const savedTask = await newTask.save();
    res.status(200).json(savedTask);
  } catch (error) {
    console.log("AddTask error: ", error);
    res.status(409).json("Couldn't Add a new Task");
  }
};

export const getAllTask = async (req, res) => {
  try {
    const TaskList = await Task.find({ userId: req.userId });
    res.status(200).json(TaskList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Task ID is invalid.");
  }

  try {
    const deletedTask = await Task.findOneAndDelete({ _id });
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found." });
    }

    res.status(200).json({ message: "Task successfully deleted." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { id: _id } = req.params;
  const { name, description, dueDate, status } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Task unavailable....");
  }

  try {
    const UpdatedTask = await Task.findByIdAndUpdate(
      _id,
      {
        $set: {
          name: name,
          description: description,
          status: status,
          dueDate: dueDate,
        },
      },
      { new: true }
    );
    res.status(200).json(UpdatedTask);
  } catch (error) {
    res.status(405).json({ message: error.message });
  }
};

export const updateStatus = async (req, res) => {
  const { id: _id } = req.params;
  const { status } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Task unavailable....");
  }

  try {
    const UpdatedStatus = await Task.findByIdAndUpdate(
      _id,
      {
        $set: {
          status: status,
        },
      },
      { new: true }
    );
    res.status(200).json(UpdatedStatus);
  } catch (error) {
    res.status(405).json({ message: error.message });
  }
};
