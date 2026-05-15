import mongoose, { Schema, model, type Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export const UserModel = model<IUser>("User", userSchema);

export const getUserByEmail = async (email: string) => {
  return UserModel.findOne({ email }).exec();
};

export const getUserByUsername = async (username: string) => {
  return UserModel.findOne({ username }).exec();
};

export const createUser = async (username: string, password: string, email: string) => {
  return UserModel.create({ username, password, email });
};
