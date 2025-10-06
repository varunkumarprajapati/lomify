import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLoginMutation } from "../../store";

const GoogleAuthButton = () => {
  const navigate = useNavigate();
  const [googleLogin, { isLoading, isSuccess, isError, error }] =
    useGoogleLoginMutation();
  const handleSuccess = async (credentialResponse) => {
    try {
      const token = credentialResponse?.credential;
      if (!token) return toast.error("Invalid Google response");

      await googleLogin({ token }).unwrap(); // <-- unwrap to throw RTK errors
    } catch (err) {
      console.error("Google login failed", err);
      toast.error("Google login failed");
    }
  };

  const handleError = () => {
    toast.error("Google login failed");
  };

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message || "Login failed");
    }
    if (isSuccess) navigate("/");
  }, [isError, isSuccess, error, navigate]);

  return (
    <div className="mt-3 w-full flex justify-center">
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        useOneTap
        shape="rectangular"
        size="large"
        text="signin_with"
        width="260"
        theme="outline"
        style={{ fontFamily: "Poppins, serif" }}
      />
    </div>
  );
};

export default GoogleAuthButton;
