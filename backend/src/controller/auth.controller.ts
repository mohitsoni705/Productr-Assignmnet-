import { createUser, getUserByEmail, getUserByUsername } from "../model/user.model.js";
import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";

export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    const user = await getUserByEmail(email);
    if (!user) {
        return res.status(404).json({
            "message":"User Does'nt exist"
        })
    }

    const isMatch = await bcrypt.compare(password,user.password);

    if (!isMatch) {
        return res.status(401).json({
            "message":"Invalid Credentials"
        })
    }

    const token = jwt.sign(
      {
        userId: user._id.toString(),
        username: user.username,
        email: user.email,
      },
      JWT_SECRET,
      { expiresIn: "12h" }
    );

    res.json({ message: "Login successful", token });
};

export const signUp = async (req: Request, res: Response) => {
    const { username, password, email } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "Username, email, and password are required." });
    }

    const existingEmail = await getUserByEmail(email);
    const existingName = await getUserByUsername(username);
    if (existingEmail || existingName) {
        return res.status(401).json({
            "message":"user already exist"
        })
    }
    const hashedPassword = await bcrypt.hash(password, 5);

    await createUser(username,hashedPassword,email);
    res.json({
        "message":"user created successfully"
    })
}