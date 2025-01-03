import { RxCross2 } from "react-icons/rx";
import { TbLoader2 } from "react-icons/tb";
import Avatar from "../Avatar/Avatar";
import { Icon, ModalContainer } from "../common";

import { useUpdateUserMutation } from "../../store";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function UpdateUserModal({
  avatar,
  username,
  name,
  email,
  about,
  onClose,
}) {
  const [
    updateUser,
    { isLoading, isSuccess, isError },
  ] = useUpdateUserMutation();

  const handleAvatarSubmit = (avatarName) => {
    if (avatar === avatarName) return toast.info("Same avatar selected.");
    return updateUser({ avatar: avatarName });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Avatar Changed.");
    }

    if (isError) {
      toast.error("Something went wrong.");
    }
  }, [isSuccess, isError]);

  return (
    <ModalContainer>
      <div className="fixed inset-0 flex items-center justify-center overflow-hidden text-white bg-white bg-opacity-10">
        <div className="fixed w-screen h-screen overflow-hidden bg-black lg:w-6/12 lg:h-4/6 lg:rounded-xl">
          <Icon
            active
            icon={RxCross2}
            className="absolute top-4 right-4"
            onClick={onClose}
          />
          {isLoading && (
            <Icon
              icon={TbLoader2}
              className="absolute p-1 rounded-full top-4 right-14 animate-spin bg-neutral-700"
            />
          )}

          <div className="flex flex-col items-center justify-center w-full h-full">
            <Avatar avatar={avatar} onSubmit={handleAvatarSubmit} />
            <p>{name}</p>
            <p>~@{username}</p>
            <p>{email}</p>
            <p>{about}</p>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
}
