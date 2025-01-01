import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Input, Button } from "../components/common";

import { useLoginMutation } from "../store";

export default function LoginPage() {
  const navigate = useNavigate();
  const [login, { isLoading, isSuccess, isError, error }] = useLoginMutation();
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(data);
  };

  useEffect(() => {
    if (isError) {
      toast.error(error.data.message);
      if (error.status === 403)
        toast.error("Verification email sent. Please check your inbox.");
    }
    if (isSuccess) navigate("/");
  }, [isSuccess, isError, error, navigate]);

  return (
    <div className="w-screen h-screen text-black bg-white font-poppins">
      <div className="flex flex-col items-center justify-center w-full h-full lg:flex-row">
        <div className="w-full h-[400px] lg:w-[700px] lg:h-full bg-signupBackground" />

        <div className="flex flex-col w-full h-full pt-16 pl-12 overflow-y-auto lg:pt-0 lg:pl-28 lg:justify-center items-left">
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

            <form
              className="flex flex-col items-center justify-center lg:w-64 w-72 gap-y-3"
              onSubmit={handleSubmit}
            >
              <Input
                solid
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
              <Input
                solid
                placeholder="Password"
                name="password"
                type="password"
                onChange={handleChange}
              />
              <Button loading={isLoading} solid className="w-full mt-2">
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
