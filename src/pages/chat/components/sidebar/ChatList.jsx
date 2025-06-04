import React from "react";
import { useFetchChatListQuery, setChatList, setSelectedUser } from "@/store";
import { useDispatch, useSelector } from "react-redux";

import { avatars } from "../../constants/avatarConstant";
import useChatContext from "../../hooks/useChatContext";
import { getConversation } from "../../services/chatDb";
import { useDebounce } from "@/hooks";

export default function ChatList() {
  const dispatch = useDispatch();
  const debounce = useDebounce();
  const { setChatting } = useChatContext();
  const chatList = useSelector((s) => s.chat.chatList);
  const { data = [], isSuccess } = useFetchChatListQuery();

  const handleClick = (user) => {
    debounce(async () => {
      const messages = await getConversation(user._id);
      setChatting(true);
      dispatch(setSelectedUser({ user, messages }));
    }, 300);
  };

  React.useEffect(() => {
    if (isSuccess) dispatch(setChatList(data));
  }, [data, dispatch, isSuccess]);

  return (
    <ul className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-neutral-900">
      {chatList.map((chat) => (
        <ChatListItem
          {...chat}
          key={chat._id}
          onClick={() => handleClick(chat)}
        />
      ))}
    </ul>
  );
}

function ChatListItem({ username, avatar, lastMessage, timestamp, onClick }) {
  timestamp = new Date(timestamp);
  timestamp = timestamp.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return (
    <li
      className="relative flex items-center justify-start w-full px-4 py-2 transition-colors cursor-pointer select-none gap-x-4 hover:bg-neutral-800"
      onClick={onClick}
    >
      <img
        draggable="false"
        src={avatars[avatar]}
        alt="avatar"
        className="rounded-full w-14 h-14"
      />
      <div className="flex flex-col justify-center items-starts ">
        <p className="">{username}</p>
        <p className="text-sm text-neutral-400">{lastMessage}</p>
      </div>

      <span className="text-xs absolute top-4 right-4 text-neutral-400">
        {timestamp}
      </span>
    </li>
  );
}
