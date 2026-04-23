import dotenv from "dotenv";
dotenv.config({
    path:"./.env"
});
import express from "express";

const app = express();

import cors from "cors";
app.use(cors());

import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);

export default app;