export type AddUserInput = {
  username: string;
  email: string;
  phone: string;
  password: string;
  age: string;
  address: string;
  gender?: string;
};

export type AddUserOuput = {
  readonly _id: string;
  readonly username: string;
  readonly email: string;
  readonly phone: string;
  readonly age: string;
  readonly address: string;
  readonly gender?: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
};

export type GetUserOutput = {
  readonly _id: string;
  readonly username: string;
  readonly email: string;
  readonly phone: string;
  readonly password: string;
  readonly age: string;
  readonly address: string;
  readonly gender?: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
};
