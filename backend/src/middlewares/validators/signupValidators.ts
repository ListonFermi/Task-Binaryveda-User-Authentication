import { NextFunction, Request, Response } from "express";
import validator from "validator";

export function signupValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { username, email, phone, password, age, address, gender } = req.body;

    if (!username) throw new Error("Username is required");
    if (
      !validator.isAlphanumeric(username) ||
      !validator.isLength(username, { min: 3, max: 50 })
    ) {
      throw new Error(
        "Username should be alphanumeric and between 3 and 50 characters long"
      );
    }

    if (!email) throw new Error("Email is required");
    if (!validator.isEmail(email)) throw new Error("Invalid email format");

    if (!phone) throw new Error("Phone number is required");
    if (!validator.isMobilePhone(phone))
      throw new Error("Invalid phone number format");

    if (!password) throw new Error("Password is required");
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
    if (!passwordRegex.test(password)) {
      throw new Error(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      );
    }

    if (!age) throw new Error("Age is required");
    if (Number(age) < 1 || Number(age) > 100) {
      throw new Error("Age must be a number between 1 and 100");
    }

    if (!address) throw new Error("Address is required");
    if (!validator.isLength(address, { max: 50 })) {
      throw new Error("Address must be less than 50 characters");
    }

    if (!gender) throw new Error("Gender is required");
    const validGenders = ["male", "female", "other"];
    if (!validGenders.includes(gender)) {
      throw new Error("Gender must be 'male', 'female', or 'other'");
    }

    next();
  } catch (e: any) {
    res.status(400).json({
      error: e.message,
    });
  }
}
