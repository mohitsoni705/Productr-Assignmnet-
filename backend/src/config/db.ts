import mongoose from "mongoose";
import { MONGO_URI } from "./env.js";

export const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB Connected!");
  } catch (error: unknown) {
    console.error("❌ MongoDB Error:", error instanceof Error ? error.message : error);
    process.exit(1);
  }
};
