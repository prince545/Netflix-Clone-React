import { User } from '../models/user.models.js';
import bcrypt from 'bcryptjs';
import { generateTokenAndSetCookie } from '../utils/generateToken.js';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function signup(req, res) {
    try {
        const { name, email, password, username } = req.body;
        if (!name || !email || !password || !username) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email" });
        }
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }
        const existingUserByEmail = await User.findOne({ email });
        if (existingUserByEmail) {
            return res.status(400).json({ message: "User already exists" });
        }

        const existingUserByUsername = await User.findOne({ username });
        if (existingUserByUsername) {
            return res.status(400).json({ message: "User already exists" });
        }
        const profilePic = `https://api.dicebear.com/5.x/initials/svg?seed=${name}`;

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            username,
            image: profilePic
        });

        generateTokenAndSetCookie(newUser._id, res);
        await newUser.save();
         res.status(201).json({ 
        message: "User created successfully",
        user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                username: newUser.username,
                image: newUser.image
            }
        });
    

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

export async function signin(req,res){
    res.send("signin");
}

export async function login(req,res){
    res.send("login");
}

export async function logout(req,res){
    try{
        res.clearCookie("jwt-netflix-clone")
        res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

export async function subscription(req,res){
    res.send("subscription");
}

