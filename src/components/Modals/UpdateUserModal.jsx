import { useEffect } from "react";
import { toast } from "react-toastify";
import { RxCross2 } from "react-icons/rx";
import { TbLoader2 } from "react-icons/tb";

import Avatar from "../Avatar/Avatar";
import Editor from "../common/Editor";
import { ModalContainer } from "../common";
import { Icon } from "../ui";


import { useUpdateUserMutation } from "../../store";

export default function UpdateUserModal({
  avatar,
  username,
  name,
  email,
  about,
  onClose,
}) {
  const [updateUser, { isLoading, isSuccess, isError, error }] =
    useUpdateUserMutation();

  const handleAvatarSubmit = (avatarName) => {
    if (avatar === avatarName) return toast.info("Same avatar selected.");
    return updateUser({ avatar: avatarName });
  };

  const handleSubmit = ({ name, value }) => updateUser({ [name]: value });

  useEffect(() => {
    if (isSuccess) {
      toast.success("Profile updated successfully.");
    }

    if (isError) {
      console.log(error);
      if (error.status === 409) toast.error(error?.data?.message);
      else toast.error("Something went wrong.");
    }
  }, [isSuccess, isError, error]);

  return (
    <ModalContainer>
      <div className="fixed inset-0 flex items-center justify-center overflow-hidden text-white bg-white bg-opacity-10">
        <div className="fixed w-screen h-screen px-6 lg:px-4 py-8 bg-black lg:w-[384px] lg:h-fit lg:rounded-xl">
          <Icon
            active
            icon={RxCross2}
            className="absolute lg:top-4 right-4 top-6 "
            onClick={onClose}
          />

          {isLoading && (
            <Icon
              icon={TbLoader2}
              className="absolute p-1 rounded-full top-4 right-14 animate-spin bg-neutral-700"
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
                isError={isError}
                loading={isLoading}
                onSubmit={handleSubmit}
              >
                <p>{name}</p>
              </Editor>

              <Editor
                name="username"
                label="Username"
                giveValue={username}
                isError={isError}
                loading={isLoading}
                onSubmit={handleSubmit}
              >
                <p>{username}</p>
              </Editor>

              <Editor
                name="about"
                label="About"
                giveValue={about}
                isError={isError}
                loading={isLoading}
                onSubmit={handleSubmit}
              >
                <p>{about}</p>
              </Editor>
            </div>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
}
