import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import apiRoutes from "./routes/index.js";

// Load environment variables
dotenv.config();

// We must import the config to initialize Firebase
import "./config/firebaseConfig.js";

const app = express();
const PORT = process.env.PORT || 3001;

// --- Middleware ---
// Enable CORS for all routes (to allow your Vite frontend to connect)
app.use(cors());
// Parse JSON request bodies
app.use(express.json());

// --- Routes ---
app.use("/api", apiRoutes); // All routes will be prefixed with /api

// Health check endpoint
app.get("/", (req, res) => {
  res.send("Idea Bank Backend is running!");
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`🚀 Server is listening on http://localhost:${PORT}`);
});
