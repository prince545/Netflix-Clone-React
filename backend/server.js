import express from 'express';
import dotenv from 'dotenv';
import authRoute from './routes/auth.route.js';
import { ENV_VARS } from './config/envVars.js';
const app = express();
import path from 'path';
import { fileURLToPath } from 'url';
const PORT = ENV_VARS.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });
console.log("MONGO_URI", process.env.MONGO_URI);
app.use("/api/v1/auth", authRoute);

app.listen(5000, () =>
    console.log('Server running on port 5000'));
//DlHbODinEIUQp0Jd