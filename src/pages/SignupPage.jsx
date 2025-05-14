import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, Form } from "formik";
import { object, string } from "yup";

import { Input, Button } from "../components/ui";
import SignupModal from "../components/SignupModal";

import { useRegisterUserMutation } from "../store";

export default function SignupPage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [signup, { isLoading, isSuccess, isError, error }] =
    useRegisterUserMutation();

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = object({
    username: string()
      .required("Username is required")
      .min(5, "Username must be at least 5 characters")
      .lowercase(),
    email: string()
      .email("Invalid email address")
      .required("Email is required"),
    password: string()
      .required("Password is required")
      .min(5, "Password must be at least 5 characters"),
  });

  const handleModal = () => {
    setShowModal(false);
    navigate("/login");
  };

  const handleSubmit = (values) => signup(values);

  useEffect(() => {
    if (isSuccess) setShowModal(true);

    if (isError) {
      if (error.status === 500) toast.error("Internal Server Error");
      toast.warn(error?.data?.message);
    }
  }, [isError, error, isSuccess]);

  return (
    <div className="w-screen h-screen text-black bg-white font-poppins">
      <div className="flex flex-col items-center justify-center w-full h-full lg:flex-row ">
        <div className="w-full h-[400px] lg:w-[700px]  lg:h-full bg-signupBackground" />

        <div className="flex flex-col w-full h-full pt-16 pl-12 overflow-y-auto lg:pt-0 lg:pl-28 lg:justify-center items-left">
          <div className="flex flex-col gap-y-3 ">
            <h1 className="pb-4 text-4xl font-bold">Sign up</h1>

            <h2 className="text-2xl lg:text-xl">
              Already have account?
              {"  "}
              <Link
                to="/login"
                className="text-blue-600 outline-none hover:underline"
              >
                Login
              </Link>
            </h2>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, handleChange, errors, touched }) => (
                <Form className="flex flex-col items-center justify-center lg:w-64 w-72 gap-y-3">
                  <Input
                    label="Username"
                    name="username"
                    autoComplete="username"
                    placeholder="Enter username"
                    value={values.username}
                    onChange={handleChange}
                    error={touched.username && errors.username}
                  />
                  <Input
                    label="Email"
                    name="email"
                    autoComplete="email"
                    placeholder="Enter email"
                    value={values.email}
                    onChange={handleChange}
                    error={touched.email && errors.email}
                  />
                  <Input
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
                  <Button solid className="w-full mt-2" loading={isLoading}>
                    Create Account
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      {showModal && <SignupModal onClick={handleModal} />}
    </div>
  );
}
