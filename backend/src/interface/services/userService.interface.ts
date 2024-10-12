import { UserSignupInput, UserSignupOutput } from "./userService.types";

export interface IUserService {
  /**
   * Sign up a new user.
   * @param userData - The data required for user signup.
   * @returns A promise that resolves to the user data upon successful signup.
   */
  userSignup(userData: UserSignupInput): Promise<UserSignupOutput>;

  userLogin(email: string, password: string): Promise<UserSignupOutput>;
}
