import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import ChatArea from "./components/chatArea/ChatArea";
import ChatRightPanel from "./components/ChatRightPanel";

import socket from "@/socket";

import { useFetchUserQuery } from "@/store";
import { ChatProvider } from "./context/ChatContext";

export default function ChatPage() {
  const { data } = useFetchUserQuery();

  React.useEffect(() => {
    if (data) socket.connect();

    return () => {
      socket.disconnect();
    };
  }, [data]);

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
