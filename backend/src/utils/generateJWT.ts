import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./constants";

export function generateJWT(id: string, role: string): string {
  try {
    const payload = { id, role };
    const options = { expiresIn: "1h" };
    return jwt.sign(payload, JWT_SECRET(), options);
  } catch (error: any) {
    throw new Error(error.message);
  }
}
