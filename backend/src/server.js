import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js"; // Ensure correct file path
import sequelize from "./config/database.js"; // Ensure correct file path

dotenv.config();

const app = express();
//Middleware
app.use(cors());
app.use(express.json());

// Fix route prefix
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 4000;
sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.log("Database connection error:", error));
