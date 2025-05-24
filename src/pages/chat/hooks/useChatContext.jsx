import React from "react";
import ChatContext from "../context/ChatContext";

export default function useChatContext() {
  return React.useContext(ChatContext);
}
