import React from "react";

const ChatContext = React.createContext();

function ChatProvider({ children }) {
  const [isRightPanelOpen, setRightPanelOpen] = React.useState(false);
  const [isChatting, setChatting] = React.useState(false);
  
  const values = {
    isRightPanelOpen,
    setRightPanelOpen,
    isChatting,
    setChatting,
  };
  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
}

export default ChatContext;
export { ChatProvider };
