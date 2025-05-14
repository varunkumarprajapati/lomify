import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Input, Button } from "../components/ui";
import SignupModal from "../components/SignupModal";

import { useRegisterUserMutation } from "../store";
import { signupValidationSchema } from "../utils/validation/validationSchema";

export default function SignupPage() {
  const navigate = useNavigate();
  const [signup, { isLoading, isSuccess, isError, error }] =
    useRegisterUserMutation();
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const validData = await signupValidationSchema(data);
      return signup(validData);
    } catch (err) {
      return toast.error(err.message);
    }
  };

  const handleModal = () => {
    setShowModal(false);
    navigate("/login");
  };

  useEffect(() => {
    if (isError) {
      if (error.status === 409) toast.warn(error.data.message);
    }

    if (isSuccess) {
      setData({ name: "", username: "", email: "", password: "" });
      setShowModal(true);
    }
  }, [isSuccess, isError, error]);

  return (
    <div className="w-screen h-screen text-black bg-white font-poppins">
      <div className="flex flex-col items-center justify-center w-full h-full lg:flex-row ">
        <div className="w-full h-[400px] lg:w-[700px]  lg:h-full bg-signupBackground" />

        <div className="flex flex-col w-full h-full pt-16 pl-12 overflow-y-auto lg:pt-0 lg:pl-28 lg:justify-center items-left">
          <div className="flex flex-col gap-y-3 ">
            <h1 className="pb-4 text-4xl font-bold">Sign up</h1>

            <h2 className="pb-6 text-2xl lg:text-xl">
              Already have account?
              {"  "}
              <Link
                to="/login"
                className="text-blue-600 outline-none hover:underline"
              >
                Login
              </Link>
            </h2>

            <form
              className="flex flex-col items-center justify-center lg:w-64 w-72 gap-y-3"
              onSubmit={handleSubmit}
            >
              <Input
                label="Username"
                autoComplete="username"
                placeholder="Enter username"
                name="username"
                value={data.username}
                onChange={handleChange}
              />
              <Input
                label="Email"
                autoComplete="email"
                placeholder="Enter email"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
              <Input
                showToggle
                label="Password"
                autoComplete="current-password"
                placeholder="Enter password"
                name="password"
                type="password"
                value={data.password}
                onChange={handleChange}
              />
              <Button solid className="w-full mt-2" loading={isLoading}>
                Create Account
              </Button>
            </form>
          </div>
        </div>
      </div>
      {showModal && <SignupModal onClick={handleModal} />}
    </div>
  );
}
