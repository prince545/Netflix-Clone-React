import express from 'express';
import { subscription,login,logout,signin,signup } from '../controllers/auth.controller.js';

const   router = express.Router();

router.post('/signup', signup);

router.post('/signin', signin);

router.post('/login', login);

router.post('/logout', logout);


router.post('/subscription', subscription);

export default router;