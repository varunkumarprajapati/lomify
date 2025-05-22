import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import { Options } from "@/components/common";
import { Icon } from "@/components/ui";

import { usePropsContext } from "@/hooks";
import { clearChatState } from "@/store";
import { twMerge } from "tailwind-merge";

export default function ChatHeader() {
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state.chat.selectedUser);
  const [showToggle, setToggle] = useState(false);

  const options = [
    {
      title: "Contact info",
      onClick: () => setToggle(false),
    },
    {
      title: "Close chat",
      onClick: () => {
        setToggle(false);
        dispatch(clearChatState());
      },
    },
    {
      title: "Delete chat",
      onClick: () => setToggle(false),
    },
  ];

  const handleOptionClick = () => setToggle(!showToggle);

  return (
    <header className="relative flex items-center px-5 py-3 bg-neutral-800">
      <UserCard {...selectedUser} className="flex-1" />
      <Icon
        active
        icon={BsThreeDotsVertical}
        onClick={handleOptionClick}
        className="size-8 md:size-7 bg-transparent"
      />
      {showToggle && <Options options={options} className="right-8 top-14" />}
    </header>
  );
}

function UserCard({ avatar, name, className = "", typing = false }) {
  const { avatars, setRightPanelOpen } = usePropsContext();

  return (
    <div
      className={twMerge("flex items-center cursor-pointer gap-x-3", className)}
      onClick={() => setRightPanelOpen(true)}
    >
      <img
        draggable="false"
        src={avatars[avatar]}
        alt={avatar}
        className="w-12 h-12 rounded-full"
      />
      <div className="flex flex-col ">
        <span>{name}</span>
        <span className="text-xs text-neutral-400">
          {typing ? "typing..." : ""}
        </span>
      </div>
    </div>
  );
}
