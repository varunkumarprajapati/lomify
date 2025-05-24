import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";
import { MdArrowBack } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

import { Options } from "@/components/common";
import { Icon } from "@/components/ui";

import { clearChatState } from "@/store";
import useChatContext from "../../hooks/useChatContext";
import { avatars } from "../../constants/avatarConstant";
import useMobile from "../../hooks/useMobile";

export default function ChatHeader() {
  const dispatch = useDispatch();
  const isMobile = useMobile();
  const { setChatting } = useChatContext();
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
        setChatting(false);
      },
    },
    {
      title: "Delete chat",
      onClick: () => setToggle(false),
    },
  ];

  const handleOptionClick = () => setToggle(!showToggle);
  const handleBackClick = () => {
    setChatting(false);
    dispatch(clearChatState());
  };
  
  return (
    <header className="relative flex items-center pl-2 md:pl-5 pr-5 py-3 bg-neutral-800">
      <Icon
        active
        icon={MdArrowBack}
        visibility={isMobile}
        onClick={handleBackClick}
        className="mr-2"
      />
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
  const { setRightPanelOpen } = useChatContext();

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
