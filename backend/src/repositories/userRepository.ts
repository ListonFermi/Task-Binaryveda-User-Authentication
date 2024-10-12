import { IUserRepository } from "../interface/repositories/userRepository.interface";
import {
  AddUserInput,
  AddUserOuput,
} from "../interface/repositories/userRepository.types";
import User from "../models/User";

export class UserRepository implements IUserRepository {
  addUser = async (userData: AddUserInput): Promise<AddUserOuput> => {
    try {
      const user = await User.create({
        ...userData,
        age: Number(userData.age),
      });

      return {
        _id: user._id.toString(),
        username: user.username,
        email: user.email,
        phone: user.phone,
        age: user.age.toString(),
        address: user.address,
        gender: user.gender,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      };
    } catch (error: any) {
      console.error("Error adding user:", error);
      throw new Error(error.message);
    }
  };
}
