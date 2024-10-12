import express from "express";
import userRouter from "./routes/userRoutes";
import { PORT } from "./utils/constants";
import morgan from "morgan";
import { connectDb } from "./config/database";

const app = express();

connectDb()

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/user/", userRouter);

app.listen(PORT, () => console.log(`Server started running in port ${PORT}`));