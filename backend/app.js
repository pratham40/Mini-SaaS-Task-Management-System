import dotenv from "dotenv";
dotenv.config({
    path:"./.env"
});
import express from "express";

const app = express();

import cors from "cors";
app.use(cors({
    origin: "http://localhost:5173",
     credentials: true
}
));

import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

export default app;