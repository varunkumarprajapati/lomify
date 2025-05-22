import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import ChatArea from "./components/chatArea/ChatArea";
import ChatRightPanel from "./components/ChatRightPanel";

import socket from "@/socket";

import { usePropsContext } from "@/hooks";
import { useFetchUserQuery } from "@/store";

export default function ChatPage() {
  const { data } = useFetchUserQuery();
  const { isRightPanelOpen } = usePropsContext();

  React.useEffect(() => {
    if (data) socket.connect();

    return () => {
      socket.disconnect();
    };
  }, [data]);

  return (
    <div className="flex h-screen bg-black text-white font-poppins md:p-4">
      <Sidebar />
      <ChatArea />
      <ChatRightPanel isOpen={isRightPanelOpen} />
    </div>
  );
}
