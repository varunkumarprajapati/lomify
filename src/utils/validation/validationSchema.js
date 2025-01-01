import { object, string } from "yup";

export const signupValidationSchema = async (data) => {
  const schema = object({
    name: string().required("Name is required.").min(5),
    username: string().required("Username is required.").min(5).lowercase(),
    email: string().email("Invalid email.").required("Gmail is required."),
    password: string().required("Password is required.").min(5),
  });

  const validData = await schema.validate(data);
  return validData;
};

export const loginValidationSchema = async (data) => {
  const schema = object({
    email: string().email("Invalid email.").required("Gmail is required."),
    password: string().required("Password is required.").min(5),
  });

  const validData = await schema.validate(data);
  return validData;
};
