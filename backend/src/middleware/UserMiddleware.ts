import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).json({ message: "Authorization header missing." });
  }

  const token = authorization.startsWith("Bearer ")
    ? authorization.slice(7)
    : authorization;

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as {
      userId: string;
      username: string;
      email: string;
    };

    req.user = {
      userId: decoded.userId,
      username: decoded.username,
      email: decoded.email,
    };

    return next();
  } catch (error: unknown) {
    return res.status(403).json({
      message: "Invalid or expired token.",
      error: error instanceof Error ? error.message : error,
    });
  }
};
