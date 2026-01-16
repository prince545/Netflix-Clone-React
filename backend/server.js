// import express from 'express';
// import dotenv from 'dotenv';
// import authRoute from './routes/auth.route.js';
// import { ENV_VARS } from './config/envVars.js';
// import { connectDB } from './config/db.js';
// const app = express();
// import path from 'path';
// import { fileURLToPath } from 'url';
// const PORT = ENV_VARS.PORT;
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// dotenv.config({ path: path.join(__dirname, '.env') });
// console.log("MONGO_URI", process.env.MONGO_URI);

// // Middleware to parse JSON and form data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Routes
// app.use("/api/v1/auth", authRoute);

// app.listen(5000, () =>
//     console.log('Server running on port 5000'));
//DlHbODinEIUQp0Jd
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import path from "path";
import { fileURLToPath } from "url";
import authRoute from "./routes/auth.route.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 👇 FORCE dotenv to load backend/.env
dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/auth", authRoute);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

startServer();
