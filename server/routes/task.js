import express from "express";
import { getAllTask, AddTask, deleteTask, updateTask } from "../controllers/task.js";
import auth from '../middleware/auth.js'

const router = express.Router();

router.post("/add",auth, AddTask);
router.delete("/delete/:id", auth, deleteTask);
router.put("/edit/:id", auth, updateTask);
router.get("/get", auth, getAllTask);


export default router;