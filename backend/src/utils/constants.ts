import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 5000;

export const MONGO_URI = () => {
  if (!process.env.MONGO_URI) throw new Error("Mongo URI not found in env");
  return String(process.env.MONGO_URI);
};
