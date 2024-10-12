import express from "express";
import userRouter from "./routes/userRoutes";
import { FRONTEND_URL, PORT } from "./utils/constants";
import morgan from "morgan";
import { connectDb } from "./config/database";
import cors from "cors";

const app = express();

connectDb();

const corsOptions = {
  origin: FRONTEND_URL() || "*",
  credentials: true,
};

app.use(cors(corsOptions)); 
app.use(morgan("dev"));    
app.use(express.json());

app.use("/api/user/", userRouter);

app.listen(PORT, () => console.log(`Server started running on port ${PORT}`));
