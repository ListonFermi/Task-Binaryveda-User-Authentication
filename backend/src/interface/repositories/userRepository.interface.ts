import { AddUserInput, AddUserOuput } from "./userRepository.types";

export interface IUserRepository {
  addUser(userData: AddUserInput): Promise<AddUserOuput>;
}
