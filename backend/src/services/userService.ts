import { IUserRepository } from "../interface/repositories/userRepository.interface";
import { IUserService } from "../interface/services/userService.interface";
import {
  UserSignupInput,
  UserSignupOutput,
} from "../interface/services/userService.types";

import { comparePassword, encryptPassword } from "../utils/encryption";
import { AppError } from "../utils/errors";

export class UserService implements IUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  userSignup = async (userData: UserSignupInput): Promise<UserSignupOutput> => {
    try {
      const encryptedPassword = encryptPassword(userData.password);

      const user = await this.userRepository.addUser({
        ...userData,
        password: encryptedPassword,
      });
      return user;
    } catch (error: any) {
      console.log("Error in user service", error.message);
      throw new Error(error.message);
    }
  };

  userLogin = async (
    email: string,
    password: string
  ): Promise<UserSignupOutput> => {
    try {
      const user = await this.userRepository.getUserByEmail(email);

      const isValidPassword = comparePassword(password, user.password);
      if (!isValidPassword) throw new AppError("Invalid Credentials", 401);

      return {
        _id: user._id,
        username: user.username,
        email: user.email,
        phone: user.phone,
        age: user.age,
        address: user.address,
        gender: user.gender,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      };
    } catch (error: any) {
      console.log("Error in user service", error.message);
      throw new Error(error.message);
    }
  };
}
