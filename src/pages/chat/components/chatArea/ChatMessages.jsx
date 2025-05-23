import React from "react";
import { useSelector, useDispatch } from "react-redux";

import MessageBubble from "./MessageBubble";

import { onReceiveMessage, onUpdateMessageId } from "@/socket";
import { addMessage, updateMessageId } from "@/store";

export default function ChatMessages() {
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.chat);
  const chatArea = React.useRef(null);

  React.useEffect(() => {
    if (chatArea.current) {
      chatArea.current.scrollTo({
        top: chatArea.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  React.useEffect(() => {
    onReceiveMessage((data) => {
      dispatch(addMessage(data));
    });

    onUpdateMessageId((data) => {
      dispatch(updateMessageId(data));
    });
  }, [dispatch]);

  return (
    <div
      ref={chatArea}
      className="w-full pt-4 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-800"
    >
      {messages.map((message) => {
        return <MessageBubble key={message._id} {...message} />;
      })}
    </div>
  );
}
