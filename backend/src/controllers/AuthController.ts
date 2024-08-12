import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User";
import { EXPIRE_IN } from "../utils/constants";

export const GetCurrentUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const user: any = await User.findById(userId).select({
      email: 1,
    });

    if (user) {
      return res.status(200).json({
        success: true,
        user: user,
      });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const UserLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    console.log(req.body)
    const foundUser: any = await User.findOne({ email: email });
    if (foundUser) {
      const isValidPassword = await bcrypt.compare(
        password,
        foundUser.password
      );
      if (isValidPassword) {
        const payload = {
          id: foundUser._id,
          exp: Math.floor(Date.now() / 1000) + EXPIRE_IN,
        };
        const token = jwt.sign(payload, process.env.SECRET_KEY as string, {
          algorithm: "HS256",
        });
        return res
          .status(200)
          .json({ message: "Login successful", token: token, success: true });
      } else {
        return res.status(201).json({ message: "Invalid password" });
      }
    } else {
      return res.status(201).json({ message: "Email not found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const UserRegister = async (req: Request, res: Response) => {
  try {
    const { email, password, repassword } = req.body;
    console.log(req.body)
    if (password === repassword) {
      const foundUser: any = await User.findOne({ email: email });
      if (foundUser) {
        return res.status(201).json({ message: "Email already exists" });
      } else {
        const newPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
          email: email,
          password: newPassword,
        });
        await newUser.save();
        return res.status(200).json({ message: "Register successful", success: true });
      }
    } else {
      return res.status(201).json({ message: "Password is not matched." });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const AuthController = {
  UserLogin,
  UserRegister,
  GetCurrentUser
};
