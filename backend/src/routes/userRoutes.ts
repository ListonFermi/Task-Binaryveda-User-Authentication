import { Router } from "express";
import { expressCallback } from "../utils/expressCallback";
import { UserController } from "../controllers/userController";

const router = Router();
const controller = new UserController();

router.route("/signup").post(expressCallback(controller.userSignup));

export default router;
