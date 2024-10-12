import { Request } from "express";
import { IUserController } from "../interface/controllers/userController.interface";
import { ControllerResponse } from "../interface/controllers/userController.types";
import { IUserService } from "../interface/services/userService.interface";

export class UserController implements IUserController {
  private userService: IUserService;

  constructor(userService: IUserService) {
    this.userService = userService;
  }

  userSignup = async (httpRequest: Request): Promise<ControllerResponse> => {
    try {
      const { username, email, phone, password, age, address, gender } =
        httpRequest.body;

      const user = await this.userService.userSignup({
        username,
        email,
        phone,
        password,
        age,
        address,
        gender,
      });

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 201,
        body: user,
      };
    } catch (e: any) {
      console.log(e);
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: e.statusCode || 500,
        body: {
          error: e.message,
        },
      };
    }
  };

  userLogin = async (httpRequest: Request): Promise<ControllerResponse> => {
    try {
      const { email, password  } = httpRequest.body

      const user = await this.userService.userLogin(email, password)
      
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: user,
      };
    } catch (e: any) {
      console.log(e);
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: e.statusCode || 500,
        body: {
          error: e.message,
        },
      };
    }
  }
}
