import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Message from "./Message";

import { receiveMessage } from "@/socket";
import { addMessage } from "@/store";

export default function ChatMessages() {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);
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
    receiveMessage((data) => {
      dispatch(addMessage(data));
    });
  }, [dispatch]);

  return (
    <div
      ref={chatArea}
      className="w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-800"
    >
      {messages.map((message, index) => (
        <Message key={index} {...message} />
      ))}
    </div>
  );
}
