import { Request } from "express";
import { IUserController } from "../interface/controllers/userController.interface";
import { ControllerResponse } from "../interface/controllers/userController.types";

export class UserController implements IUserController {
  async userSignup(httpRequest: Request): Promise<ControllerResponse> {
    try {
      const { username, email, phone, password, age, address, gender } =
        httpRequest.body;

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 201,
        body: {},
      };
    } catch (e: any) {
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 500,
        body: {
          error: e.message,
        },
      };
    }
  }

}
