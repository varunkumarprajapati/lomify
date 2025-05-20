import React from "react";
import { Link, useLocation } from "react-router-dom";
import { object, ref, string } from "yup";

import { Box, Input, Button } from "../components/ui";
import ThumbUp from "../assets/thumb-up.svg";

import { useResetPasswordMutation } from "../store";

export default function ResetPasswordPage() {
  const token = useLocation().pathname.split("/")[2];

  const [data, setData] = React.useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = React.useState({
    newPassword: null,
    confirmPassword: null,
  });

  const [resetPassword, { isSuccess, isLoading, isError }] =
    useResetPasswordMutation();

  const handleChange = async (e) => {
    const { name, value } = e.target;
    const newFormData = { ...data, [name]: value };
    setData(newFormData);

    try {
      await schema.validate(newFormData, { abortEarly: false });
      setError({ newPassword: null, confirmPassword: null });
    } catch (err) {
      if (err.inner) {
        const newErrors = { newPassword: null, confirmPassword: null };
        err.inner.forEach((e) => {
          newErrors[e.path] = e.message;
        });
        setError(newErrors);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await schema.validate(data, { abortEarly: false });
      resetPassword({ token, password: data.newPassword });
    } catch (err) {
      const newErrors = { newPassword: null, confirmPassword: null };
      err.inner.forEach((e) => {
        newErrors[e.path] = e.message;
      });
      setError(newErrors);
    }
  };

  const schema = object({
    newPassword: string()
      .min(3, "Password must be at least 3 characters")
      .required("New password is required"),

    confirmPassword: string()
      .min(3, "Password must be at least 3 characters")
      .oneOf([ref("newPassword")], "Passwords must match")
      .required("Confirm password is required"),
  });

  let result = <PasswordResetDone />;
  if (isError) result = <PasswordResetFail />;

  return (
    <main className="w-screen h-screen text-white bg-black font-poppins">
      <div className="flex items-center justify-center w-full h-full">
        <Box className="flex flex-col items-center justify-center w-11/12 px-4 py-8 text-center md:px-20 md:w-8/12 lg:w-6/12 xl:w-5/12 gap-y-3">
          {isSuccess || isError ? (
            result
          ) : (
            <>
              <h3 className="text-xl font-semibold text-blue-600 md:text-4xl">
                Reset your password ?
              </h3>
              <p className="text-sm text-neutral-400">
                Your new password should be different <br />
                from password previously used.
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center justify-center w-full mt-5 gap-y-3 md:w-10/12"
              >
                <Input
                  solid
                  autoComplete="new-password"
                  name="newPassword"
                  label="Enter new password"
                  placeholder="New password"
                  value={data.newPassword}
                  error={error.newPassword}
                  onChange={handleChange}
                  className="!py-2 !px-3"
                />
                <Input
                  solid
                  autoComplete="confirm password"
                  name="confirmPassword"
                  label="Enter confirm password"
                  placeholder="Confirm password"
                  value={data.confirmPassword}
                  error={error.confirmPassword}
                  onChange={handleChange}
                  className="!py-2 !px-3"
                />
                <footer className="flex flex-col w-full mt-4 gap-y-3">
                  <Button solid className="w-full" loading={isLoading}>
                    Change
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

function PasswordResetDone() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <div className="size-36">
        <img src={ThumbUp} alt="thumbUp" />
      </div>
      <h1 className="text-3xl font-semibold">Password Reset!</h1>
      <p className=" text-neutral-400">
        Your password has been successfully reset, click below to continue your
        access.
      </p>
      <Button active className="w-full">
        <Link to="/login">Back to login</Link>
      </Button>
    </div>
  );
}

function PasswordResetFail() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <div className="size-48 scale-y-[-1]">
        <img src={ThumbUp} alt="thumbUp" />
      </div>
      <h1 className="text-3xl font-semibold">Link Expired!</h1>
      <p className="text-neutral-400">
        The password reset link has expired or is invalid. Please request a new
        password reset to continue.
      </p>
      <Button active className="w-full">
        <Link to="/forgot-password">Request new link</Link>
      </Button>
      <Link to="/login" className="text-blue-600">
        Back to login
      </Link>
    </div>
  );
}
