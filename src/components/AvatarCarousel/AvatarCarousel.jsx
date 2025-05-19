import { useState } from "react";
import { MdArrowLeft, MdArrowRight, MdCheck } from "react-icons/md";

import { Icon } from "../ui";

export default function AvatarCarousel({ currentAvatar, onSubmit }) {
  const avatars = [
    { name: "brook", url: "/images/brook.webp" },
    { name: "chopper", url: "/images/chopper.webp" },
    { name: "corazon", url: "/images/corazon.webp" },
    { name: "eneru", url: "/images/eneru.webp" },
    { name: "franky", url: "/images/franky.webp" },
    { name: "fujitora", url: "/images/fujitora.webp" },
    { name: "luffy", url: "/images/luffy.webp" },
    { name: "luffy4", url: "/images/luffy4.webp" },
    { name: "luffy5", url: "/images/luffy5.webp" },
    { name: "marco", url: "/images/marco.webp" },
    { name: "merry", url: "/images/merry.webp" },
    { name: "robin", url: "/images/robin.webp" },
    { name: "roger", url: "/images/roger.webp" },
    { name: "sanji", url: "/images/sanji.webp" },
    { name: "shanks", url: "/images/shanks.webp" },
    { name: "smoker", url: "/images/smoker.webp" },
    { name: "sunny", url: "/images/sunny.webp" },
    { name: "usopp", url: "/images/usopp.webp" },
    { name: "uta", url: "/images/uta.webp" },
    { name: "yamato", url: "/images/yamato.webp" },
    { name: "zoro", url: "/images/zoro.webp" },
  ];

  const [current, setCurrent] = useState(
    avatars.findIndex((avatar) => currentAvatar === avatar.name)
  );

  const handleLeftArrowClick = () => {
    if (current === 0) return setCurrent(avatars.length - 1 - current);
    return setCurrent(current - 1);
  };
  const handleRightArrowClick = () => {
    if (current === 20) return setCurrent(avatars.length - 1 - current);
    return setCurrent(current + 1);
  };

  const handleSubmit = () => {
    return onSubmit(avatars[current].name);
  };

  return (
    <div className="flex flex-row items-center justify-center gap-x-3">
      <Icon
        className="transition hover:scale-125"
        size="56"
        icon={MdArrowLeft}
        onClick={handleLeftArrowClick}
      />
      <img
        draggable="false"
        src={avatars[current].url}
        alt={"avatar"}
        className="rounded-full"
      />
      <Icon
        className="transition hover:scale-125"
        size="56"
        icon={MdArrowRight}
        onClick={handleRightArrowClick}
      />

      <Icon
        active
        icon={MdCheck}
        className="absolute p-1 rounded-full bg-neutral-600 bottom-4 left-4"
        onClick={handleSubmit}
      />
    </div>
  );
}
