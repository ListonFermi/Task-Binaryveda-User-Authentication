import { IUserRepository } from "../interface/repositories/userRepository.interface";
import { IUserService } from "../interface/services/userService.interface";
import {
  UserSignupInput,
  UserSignupOutput,
} from "../interface/services/userService.types";

export class UserService implements IUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  userSignup = async (userData: UserSignupInput): Promise<UserSignupOutput> => {
    try {
      const user = await this.userRepository.addUser(userData);
      return user;
    } catch (error: any) {
      console.log("Error in user service", error.message);
      throw new Error(error.message);
    }
  };
}
