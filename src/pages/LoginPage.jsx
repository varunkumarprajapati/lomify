import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Form, Formik } from "formik";
import { object, string } from "yup";

import { Input, Button } from "../components/ui";
import BGImage from "../assets/background.webp";

import { useLoginMutation } from "../store";

import GoogleAuthButton from "../components/auth/GoogleAuthButton";
// import FacebookButton from "../components/auth/FacebookButton";

export default function LoginPage() {
  const navigate = useNavigate();
  const [login, { isLoading, isSuccess, isError, error }] = useLoginMutation();
  const initialValues = { email: "", password: "" };

  const handleSubmit = (values) => login(values);

  const validationSchema = object({
    email: string()
      .email("Invalid email address")
      .required("Email is required"),
    password: string()
      .required("Password is required")
      .min(5, "Password must be at least 5 characters"),
  });

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
      if (error?.status === 403)
        toast.error("Verification email sent. Please check your inbox.");
    }
    if (isSuccess) navigate("/");
  }, [isSuccess, isError, error, navigate]);

  return (
    <div className="w-screen h-screen text-black bg-white font-poppins">
      <div className="flex flex-col items-center justify-center w-full h-full lg:flex-row">
        <div className="w-full h-[200px] lg:h-screen lg:w-[500px]">
          <img
            src={BGImage}
            alt="background-image"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex flex-col flex-1 w-full h-full pt-16 pl-12 overflow-y-auto lg:pt-0 lg:pl-28 lg:justify-center items-left">
          <div className="flex flex-col gap-y-3 ">
            <h1 className="pb-4 text-4xl font-bold">Login</h1>

            <h2 className="pb-6 text-2xl lg:text-xl">
              Don't have an account?
              <br />{" "}
              <Link
                to="/signup"
                className="text-blue-600 outline-none hover:underline"
              >
                Create Account
              </Link>
            </h2>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ handleChange, errors, values, touched }) => (
                <Form className="flex flex-col items-center justify-center lg:w-64 w-72 gap-y-3">
                  <Input
                    outline
                    label="Email"
                    name="email"
                    autoComplete="email"
                    placeholder="Enter email"
                    value={values.email}
                    onChange={handleChange}
                    error={touched.email && errors.email}
                  />
                  <Input
                    outline
                    showToggle
                    label="Password"
                    name="password"
                    autoComplete="new-password"
                    placeholder="Enter password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    error={touched.password && errors.password}
                  />
                  <div className="w-full text-sm text-end">
                    <Link
                      to="/forgot-password"
                      className="text-blue-600 underline"
                    >
                      forgot password ?
                    </Link>
                  </div>
                  <Button loading={isLoading} solid className="w-full mt-2">
                    Login
                  </Button>
                </Form>
              )}
            </Formik>

            <div className="lg:w-64 w-72 py-2 mt-4">
              <div className="">
                <GoogleAuthButton />
                {/* <FacebookButton /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
