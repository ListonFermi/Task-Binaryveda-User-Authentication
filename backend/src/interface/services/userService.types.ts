export type UserSignupInput = {
  username: string;
  email: string;
  phone: string;
  password: string;
  age: string;
  address: string;
  gender?: string;
};

export type UserSignupOutput = {
  readonly _id: string;
  readonly username: string;
  readonly email: string;
  readonly phone: string;
  readonly age: string;
  readonly address: string;
  readonly gender?: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly token?: string;
};
