import FacebookLogin from "@greatsumini/react-facebook-login";
import axios from "axios";

const FacebookButton = () => {
  const handleSuccess = async (response) => {
    const { accessToken, userID } = response;
    const res = await axios.post("/auth/facebook", { accessToken, userID });
    localStorage.setItem("token", res.data.token);
  };

  const handleFail = (error) => {
    console.error("Facebook login failed", error);
  };

  return (
    <FacebookLogin
      //   appId={process.env.REACT_APP_FACEBOOK_APP_ID}
      onSuccess={handleSuccess}
      onFail={handleFail}
      style={{
        backgroundColor: "#4267b2",
        color: "#fff",
        border: "none",
        padding: "10px",
        borderRadius: "4px",
        fontWeight: "bold",
      }}
    >
      Continue with Facebook
    </FacebookLogin>
  );
};

export default FacebookButton;
