import validator from "validator";

// Password regex for at least one uppercase, one lowercase, one number, and one special character
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

const validationMessages = {
  username: "Username should be alphanumeric and between 3 and 50 characters long",
  email: "Invalid email format",
  phone: "Invalid phone number format",
  password: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
  age: "Age must be between 1 and 100",
  address: "Address must be less than 50 characters",
  gender: "Gender must be 'male', 'female', or 'other'",
};

const usernameValidator = (value: string) => {
  return validator.isAlphanumeric(value) && validator.isLength(value, { min: 3, max: 50 });
};

const emailValidator = (value: string) => {
  return validator.isEmail(value);
};

const phoneValidator = (value: string) => {
  return validator.isMobilePhone(value);
};

const passwordValidator = (value: string) => {
  return passwordRegex.test(value);
};

const ageValidator = (value: number) => {
  return value >= 1 && value <= 100;
};

const addressValidator = (value: string) => {
  return validator.isLength(value, { max: 50 });
};

const genderValidator = (value: string) => {
  return ["male", "female", "other"].includes(value);
};

export const userValidators = {
  username: {
    validator: usernameValidator,
    message: validationMessages.username,
  },
  email: {
    validator: emailValidator,
    message: validationMessages.email,
  },
  phone: {
    validator: phoneValidator,
    message: validationMessages.phone,
  },
  password: {
    validator: passwordValidator,
    message: validationMessages.password,
  },
  age: {
    validator: ageValidator,
    message: validationMessages.age,
  },
  address: {
    validator: addressValidator,
    message: validationMessages.address,
  },
  gender: {
    validator: genderValidator,
    message: validationMessages.gender,
  },
};
