import React from "react";
import { object, string } from "yup";
import { Link } from "react-router-dom";

import { Button, Input, Box } from "../components/ui";
import MailBox from "../assets/mailbox.svg";

import { useLazyForgotPasswordQuery } from "../store";

export default function ForgotPasswordPage() {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  const [forgotPassword, { isSuccess, isLoading }] =
    useLazyForgotPasswordQuery();

  const handleChange = async (e) => {
    const email = e.target.value;
    setValue(email);
    try {
      await schema.validate({ email });
      setError(null);
    } catch (error) {
      setError(error?.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    forgotPassword(value);
  };

  const schema = object({
    email: string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  return (
    <main className="w-screen h-screen text-white bg-black font-poppins">
      <div className="flex items-center justify-center w-full h-full">
        <Box className="flex flex-col items-center justify-center w-11/12 px-4 py-8 text-center md:px-20 md:w-8/12 lg:w-6/12 xl:w-5/12 gap-y-3">
          {isSuccess ? (
            <CheckEmail email={value} />
          ) : (
            <>
              <h3 className="text-xl font-semibold text-blue-600 md:text-3xl">
                Forgot your password ?
              </h3>
              <p className="text-sm text-neutral-400">
                Your password will be reset by email
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center justify-center w-full mt-5"
              >
                <Input
                  solid
                  autoComplete="email"
                  name="email"
                  label="Enter email address"
                  placeholder="Enter email"
                  value={value}
                  error={error}
                  onChange={handleChange}
                  className="!py-2 !px-3"
                  disable={isLoading}
                />
                <footer className="flex flex-col w-full mt-6 gap-y-3">
                  <Button solid className="w-full" loading={isLoading}>
                    Reset
                  </Button>
                  <Link to="/login" className="text-blue-600">
                    Back to login
                  </Link>
                </footer>
              </form>
            </>
          )}
        </Box>
      </div>
    </main>
  );
}

function CheckEmail({ email = "varun@example.com" }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="size-48">
        <img src={MailBox} alt="mail-box" />
      </div>
      <h2 className="pb-4 text-3xl font-semibold">Check your email</h2>
      <p className="text-neutral-400">
        If <span className="font-semibold text-white"> {email}</span> is
        registered, we've sent instructions on how to reset your password. If
        you don't receive an email, please check the address and try again.
      </p>
    </div>
  );
}
