import { TbLoader2 } from "react-icons/tb";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

import { Box, Icon } from "../components/ui";
import MailOpen from "../assets/mail-open.svg";
import MailFull from "../assets/mail-full.svg";

import { useVerifyEmailQuery } from "../store";

export default function VerifyEmailPage() {
  const navigate = useNavigate();
  const { isLoading, isSuccess, isError } = useVerifyEmailQuery(
    useLocation().pathname.split("/")[2]
  );

  let image = MailFull;
  let content = (
    <>
      <h1 className="text-2xl font-semibold text-center md:text-4xl text-nowrap">
        Verifying your email...
      </h1>
      <h2 className="text-lg font-semibold text-center md:text-2xl">
        Please wait while we confirm your email address.
      </h2>
    </>
  );

  if (isSuccess) {
    content = (
      <>
        <h1 className="text-3xl font-semibold md:text-4xl text-nowrap">
          Congratulations 🎉
        </h1>
        <h2 className="text-2xl font-semibold md:text-2xl">
          Your email is verified!!
        </h2>
      </>
    );
  }

  if (isError) {
    image = MailOpen;
    content = (
      <>
        <h1 className="text-3xl font-semibold text-center md:text-4xl text-nowrap">
          Link Expired ⚠️
        </h1>
        <h2 className="text-xl font-semibold text-center md:text-2xl">
          The verification link has expired.
        </h2>
      </>
    );
  }

  const handleClick = () => navigate("/login");

  return (
    <div className="w-screen h-screen bg-black font-poppins">
      <div className="flex items-center justify-center w-full h-full">
        <Box className="relative flex flex-col items-center justify-center w-11/12 p-4 text-white h-3/6 gap-y-4 md:w-8/12 lg:w-6/12">
          {!isLoading && (
            <Icon
              active
              title="go back"
              icon={IoMdArrowRoundBack}
              className="absolute top-4 left-4"
              onClick={handleClick}
            />
          )}
          {isLoading && (
            <Icon
              active
              icon={TbLoader2}
              className="absolute p top-4 right-4 animate-spin"
            />
          )}
          <div className="size-44 md:size-48">
            <img src={image} alt="mail-full" className="object-fill" />
          </div>
          {content}
        </Box>
      </div>
    </div>
  );
}
