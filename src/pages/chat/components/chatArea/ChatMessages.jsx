import React from "react";
import Message from "./Message";

export default function ChatMessages({ messages }) {
  const chatArea = React.useRef(null);
  React.useEffect(() => {
    if (chatArea.current) {
      chatArea.current.scrollTo({
        top: chatArea.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

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
