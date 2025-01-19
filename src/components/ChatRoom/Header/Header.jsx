import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import { Icon, Options } from "../../common";

import { useFetchUserQuery } from "../../../store";
import usePropsContext from "../../../hooks/use-PropsContext";

export default function Header() {
  const [showToggle, setToggle] = useState(false);
  const { setChatOpen } = usePropsContext();

  const options = [
    {
      title: "Contact info",
      onClick: () => setToggle(false),
    },
    {
      title: "Close chat",
      onClick: () => {
        setToggle(false);
        setChatOpen(false);
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
        <UserCard />
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

function UserCard() {
  const { data } = useFetchUserQuery();
  const { avatars, setRightPanelOpen } = usePropsContext();

  return (
    <div
      className="flex items-center w-full cursor-pointer gap-x-3"
      onClick={() => setRightPanelOpen(true)}
    >
      <img
        draggable="false"
        src={avatars[data?.avatar]}
        alt={data?.avatar}
        className="w-12 rounded-full"
      />
      <div className="flex flex-col ">
        <span>{data.name}</span>
        <span className="text-xs text-neutral-400">
          {true ? "typing..." : ""}
        </span>
      </div>
    </div>
  );
}
