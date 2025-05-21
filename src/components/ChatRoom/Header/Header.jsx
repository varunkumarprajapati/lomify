import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import { Options } from "@/components/common";
import { Icon } from "@/components/ui";

import { useChatRoomContext, usePropsContext } from "@/hooks";

export default function Header({ data }) {
  const [showToggle, setToggle] = useState(false);
  const { setChatUser, setMessages } = useChatRoomContext();

  const options = [
    {
      title: "Contact info",
      onClick: () => setToggle(false),
    },
    {
      title: "Close chat",
      onClick: () => {
        setToggle(false);
        setMessages([]);
        setChatUser({});
      },
    },
    {
      title: "Delete chat",
      onClick: () => setToggle(false),
    },
  ];

  const handleOptionClick = () => setToggle(!showToggle);

  return (
    <div className="relative w-full h-16 p-6 bg-neutral-800">
      <div className="flex items-center w-full h-full">
        <UserCard {...data} />
        <Icon
          size="20"
          icon={BsThreeDotsVertical}
          onClick={handleOptionClick}
          className="p-2 rounded-full hover:bg-neutral-700"
        />
      </div>
      {showToggle && <Options options={options} className="right-8 top-14" />}
    </div>
  );
}

function UserCard({ avatar, name }) {
  const { avatars, setRightPanelOpen } = usePropsContext();

  return (
    <div
      className="flex items-center w-full cursor-pointer gap-x-3"
      onClick={() => setRightPanelOpen(true)}
    >
      <img
        draggable="false"
        src={avatars[avatar]}
        alt={avatar}
        className="w-12 rounded-full"
      />
      <div className="flex flex-col ">
        <span>{name}</span>
        <span className="text-xs text-neutral-400">
          {true ? "typing..." : ""}
        </span>
      </div>
    </div>
  );
}
