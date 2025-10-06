import { useEffect } from "react";
import { toast } from "react-toastify";
import { RxCross2 } from "react-icons/rx";
import { TbLoader2 } from "react-icons/tb";

import Avatar from "@/components/Avatar/Avatar";
import Editor from "@/components/common/Editor";
import { ModalContainer } from "@/components/common";
import { Icon } from "@/components/ui";

import { useUpdateUserMutation } from "@/store";
import { Button } from "@/components/ui";
import { useLogoutMutation } from "@/store";

export default function UpdateUserModal({
  avatar,
  username,
  name,
  email,
  about,
  onClose,
  isOpen = false,
}) {
  const [
    updateUser,
    {
      isLoading: isUpdating,
      isSuccess: isUpdateSuccess,
      isError: isUpdateError,
      error: updateError,
    },
  ] = useUpdateUserMutation();

  const [
    logout,
    {
      isLoading: isLoggingOut,
      isSuccess: isLogoutSuccess,
      isError: isLogoutError,
      error: logoutError,
    },
  ] = useLogoutMutation();

  const handleAvatarSubmit = (avatarName) => {
    if (avatar === avatarName) return toast.info("Same avatar selected.");
    return updateUser({ avatar: avatarName });
  };

  const handleSubmit = ({ name, value }) => updateUser({ [name]: value });

  useEffect(() => {
    if (isUpdateSuccess) toast.success("Profile updated successfully.");
    if (isUpdateError) {
      if (updateError?.status === 409) toast.error(updateError?.data?.message);
      else toast.error("Something went wrong.");
    }

    if (isLogoutSuccess) toast.info("Logged out successfully.");

    if (isLogoutError) toast.error("Logout failed. Try again.");
  }, [
    isUpdateSuccess,
    isUpdateError,
    updateError,
    isLogoutSuccess,
    isLogoutError,
  ]);

  if (!isOpen) return null;

  const handleClick = async () => {
    try {
      await logout().unwrap();
      window.location.reload(); // simplest logout reset
    } catch (err) {
      toast.error("Logout failed.");
      console.error("Logout error:", err);
    }
  };

  return (
    <ModalContainer>
      <div className="fixed inset-0 flex items-center justify-center overflow-hidden text-white bg-white/10">
        <div className="fixed w-screen h-screen px-6 lg:px-4 py-8 bg-black lg:w-[384px] lg:h-fit lg:rounded-xl">
          <Icon
            active
            icon={RxCross2}
            className="absolute lg:top-4 right-4 top-12"
            onClick={onClose}
          />

          {isUpdating && (
            <Icon
              icon={TbLoader2}
              className="absolute p-1 rounded-full lg:top-4 top-12 right-14 animate-spin bg-neutral-700"
            />
          )}

          <div className="flex flex-col items-center justify-center w-full h-full gap-y-4">
            <Avatar avatar={avatar} onSubmit={handleAvatarSubmit} />

            <p className="text-base lg:text-xs text-neutral-200">{email}</p>

            <div className="flex flex-col w-full gap-y-2">
              <Editor
                name="name"
                label="Name"
                giveValue={name}
                isError={isUpdateError}
                loading={isUpdating}
                onSubmit={handleSubmit}
              >
                <p>{name}</p>
              </Editor>

              <Editor
                name="username"
                label="Username"
                giveValue={username}
                isError={isUpdateError}
                loading={isUpdating}
                onSubmit={handleSubmit}
              >
                <p>{username}</p>
              </Editor>

              <Editor
                name="about"
                label="About"
                giveValue={about}
                isError={isUpdateError}
                loading={isUpdating}
                onSubmit={handleSubmit}
              >
                <p>{about}</p>
              </Editor>
              <Button
                className="bg-[#FF4136] mt-1 w-full text-[#FFFFFF]"
                onClick={handleClick}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
}
