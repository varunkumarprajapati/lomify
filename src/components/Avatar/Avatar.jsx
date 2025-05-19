import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { MdEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

import usePropsContext from "../../hooks/use-PropsContext";
import { Icon } from "../ui";
import AvatarCarousel from "../AvatarCarousel/AvatarCarousel";

export default function Avatar({ className, avatar, onSubmit }) {
  const [isAvatarUpdating, setAvatarUpdating] = useState(false);
  const { avatars } = usePropsContext();

  const handleEditClick = () => {
    setAvatarUpdating(!isAvatarUpdating);
  };

  return (
    <div
      className={twMerge("relative rounded-full w-52 select-none", className)}
    >
      {isAvatarUpdating ? (
        <AvatarCarousel currentAvatar={avatar} onSubmit={onSubmit} />
      ) : (
        <img
          draggable="false"
          src={avatars[avatar]}
          alt={avatar}
          className="rounded-full"
        />
      )}
      <Icon
        active
        icon={isAvatarUpdating ? RxCross2 : MdEdit}
        className="absolute bottom-4 right-4"
        onClick={handleEditClick}
      />
    </div>
  );
}
