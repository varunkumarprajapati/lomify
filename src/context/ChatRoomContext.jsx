import { createContext, useState } from "react";

const ChatRoomContext = createContext();

function ChatRoomProvider({ children }) {
  const [isChatUser, setChatUser] = useState({});
  const [messages, setMessages] = useState([]);

  const data = {
    isChatUser,
    setChatUser,
    messages,
    setMessages,
  };

  return (
    <ChatRoomContext.Provider value={data}>{children}</ChatRoomContext.Provider>
  );
}

export default ChatRoomContext;
export { ChatRoomProvider };
