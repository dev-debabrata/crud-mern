import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import employeeRoutes from "./routes/employee.routes.js";

dotenv.config();

const app = express();

connectDB();

app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    })
);
app.use(express.json());

app.use("/api/employees", employeeRoutes);

export default app;

const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => {
        console.log("Server is running on port: ", PORT);
    });
}