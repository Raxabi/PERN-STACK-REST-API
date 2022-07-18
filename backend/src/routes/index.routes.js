import { Router } from "express";
import cors from "cors";

// Init Express router handler
const router = Router();

// Cors Options
const options = {
    origin: "http://localhost:3000"
}

// Import controllers
import { returnTasks, returnOneTask, saveTask, updateTasks } from "../controllers/index.controllers.js";

router.get("/", /*cors({options}),*/ returnTasks);

router.get("/:id", returnOneTask)

router.post("/", saveTask)

router.put("/:id", updateTasks)

export default router;