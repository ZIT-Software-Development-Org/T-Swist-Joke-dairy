import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME, // Database Name
  process.env.DB_USER, // Database User
  process.env.DB_PASSWORD, // Database Password
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: Number(process.env.DB_PORT) || 5432, // Ensure port is a number
    logging: false,
  }
);

// Test connection
sequelize.authenticate()
  .then(() => console.log("Database connected successfully!"))
  .catch(err => console.error("Database connection error:", err));

export default sequelize;
