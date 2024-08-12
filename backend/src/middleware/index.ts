import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const Auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    if (token) {
      const decodedData: any = jwt.verify(
        token,
        process.env.SECRET_KEY as string
      );
      req.body.userId = decodedData.id;
      next();
    } else {
      return res
        .status(401)
        .json({ message: "Authentication failed: No token provided", auth: true });
    }
  } catch (err) {
    return res
      .status(401)
      .json({ message: "Authentication failed: Invalid token", auth: true });
  }
};
