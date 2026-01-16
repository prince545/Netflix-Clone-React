import jwt from 'jsonwebtoken';
import { ENV_VARS } from '../config/envVars.js';

if (!ENV_VARS.JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in environment variables');
}

export const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, {
        expiresIn: '7d'
    });
    
    res.cookie('jwt-netflix', token, {
        httpOnly: true,
        secure: ENV_VARS.NODE_ENV === 'production', // true in production, false in development
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });
    
    return token;
};

export const generateRefreshToken = (userId) => {
    return jwt.sign({ userId }, ENV_VARS.JWT_SECRET, {
        expiresIn: '30d'
    });
};