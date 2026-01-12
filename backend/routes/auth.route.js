import express from 'express';
import { subscription,login,logout,signin,signup } from '../controllers/auth.controller.js';

const   router = express.Router();

router.get('/signup', signup);

router.get('/signin', signin);

router.get('/login', login);

router.get('/logout', logout);


router.get('/subscription', subscription);

export default router;