import { IUserRepository } from "../interface/repositories/userRepository.interface";
import {
  AddUserInput,
  AddUserOuput,
  GetUserOutput,
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
      if (error.code === 11000) {
        const field = Object.keys(error.keyValue)[0]; 
        const value = error.keyValue[field]; 
        error.message = `${field} '${value}' already exists.`;
      }
      throw new Error(error.message);
    }
  };
  getUserByEmail = async (email: string): Promise<GetUserOutput> => {
    try {
      const user = await User.findOne({ email });
      if (!user) throw new Error("User not found");

      return {
        _id: user._id.toString(),
        username: user.username,
        email: user.email,
        phone: user.phone,
        password: user.password,
        age: user.age.toString(),
        address: user.address,
        gender: user.gender,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      };
    } catch (error: any) {
      console.error("Error getting user by email:", error);

      throw new Error(error.message);
    }
  };
}
