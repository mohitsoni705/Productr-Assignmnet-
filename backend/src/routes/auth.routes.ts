import express from "express";
import { loginUser, signUp } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", loginUser);

export default router;

