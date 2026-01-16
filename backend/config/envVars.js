// import dotenv from 'dotenv';
// dotenv.config();

// export const ENV_VARS = {
//     MONGO_URI: process.env.MONGO_URI,
//     PORT: process.env.PORT,
//     JWT_SECRET: process.env.JWT_SECRET,
//     NODE_ENV: process.env.NODE_ENV
// }

import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from the root .env file
dotenv.config({ path: path.resolve(__dirname, '..', '..', '.env') });

export const ENV_VARS = {
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/netflix-clone',
    PORT: process.env.PORT || 5000,
    JWT_SECRET: process.env.JWT_SECRET || 'your-default-jwt-secret',
    NODE_ENV: process.env.NODE_ENV || 'development'
};

// Log the environment variables (except sensitive ones) for debugging
console.log('Environment:', {
    NODE_ENV: ENV_VARS.NODE_ENV,
    PORT: ENV_VARS.PORT,
    JWT_SECRET: ENV_VARS.JWT_SECRET ? 'Set' : 'Not set',
    MONGO_URI: ENV_VARS.MONGO_URI ? 'Set' : 'Not set'
});