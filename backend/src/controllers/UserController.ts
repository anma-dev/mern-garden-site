import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import path from "path";
import multer from "multer";
import fs from "fs";

const CreateUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const newPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      email: email,
      password: newPassword,
    });

    const savedUser = await newUser.save();
    return res.status(200).json({
      success: true,
      user: {
        _id: savedUser._id,
        email: savedUser.email,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(501).json({ message: "Internal server error" });
  }
};

export const UserController = {
  CreateUser,
};
