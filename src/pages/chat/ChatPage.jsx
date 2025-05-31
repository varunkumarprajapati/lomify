import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import ChatArea from "./components/chatArea/ChatArea";
import ChatRightPanel from "./components/ChatRightPanel";

import socket from "@/socket";

import { useFetchConversationsQuery, useFetchUserQuery } from "@/store";
import { ChatProvider } from "./context/ChatContext";
import { saveMessages } from "./services/chatDb";

export default function ChatPage() {
  const { data } = useFetchUserQuery();
  const { data: conversations, isSuccess } = useFetchConversationsQuery(
    localStorage.getItem("lastSync")
  );

  React.useEffect(() => {
    if (data) socket.connect();
    return () => socket.disconnect();
  }, [data]);

  React.useEffect(() => {
    if (isSuccess) saveMessages(conversations);
    return () => localStorage.setItem("lastSync", new Date().toISOString());
  }, [conversations, isSuccess]);

  return (
    <ChatProvider>
      <div className="flex h-screen bg-black text-white font-poppins md:p-4">
        <Sidebar />
        <ChatArea />
        <ChatRightPanel />
      </div>
    </ChatProvider>
  );
}
