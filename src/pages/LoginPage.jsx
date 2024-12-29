import { Link } from "react-router-dom";
import { Input, Button } from "../components/common";
import { useState } from "react";

export default function LoginPage() {
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="w-screen h-screen text-black bg-white font-poppins">
      <div className="flex flex-col items-center justify-center w-full h-full lg:flex-row">
        <div className="w-full h-[400px] lg:w-[700px] lg:h-full bg-signupBackground" />

        <div className="flex flex-col w-full h-full pt-16 pl-12 overflow-y-auto lg:pl-16 lg:justify-center items-left">
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
              autoComplete="off"
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
              <Button solid className="mt-2">
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
