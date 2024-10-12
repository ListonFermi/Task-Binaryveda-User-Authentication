import { NextFunction, Request, Response } from "express";
import validator from "validator";

export function loginValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { email, password } = req.body;

    if (!email) throw new Error("Email is required");
    if (!validator.isEmail(email)) throw new Error("Invalid email format");

    if (!password) throw new Error("Password is required");
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
    if (!passwordRegex.test(password)) {
      throw new Error(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      );
    }

    next();
  } catch (e: any) {
    res.status(400).json({
      error: e.message,
    });
  }
}
