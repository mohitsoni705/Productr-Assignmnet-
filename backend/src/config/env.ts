import dotenv from "dotenv";

dotenv.config();

export const MONGO_URI = process.env.MONGO_URI ?? "mongodb+srv://mohitsoni3820_db_user:m0hit@mohitcluster.dixlj3c.mongodb.net/productr";
export const JWT_SECRET = process.env.JWT_SECRET ?? "dafghwpokfcnmalklfvnkep[fdjkfndsmlpsij";
export const PORT = process.env.PORT ? Number(process.env.PORT) : 8000;

if (!process.env.MONGO_URI || !process.env.JWT_SECRET) {
  console.warn(
    "WARNING: MONGO_URI or JWT_SECRET is not set. Using default values. Set these in a .env file for production."
  );
}
