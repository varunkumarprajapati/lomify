import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import ChatArea from "./components/chatArea/ChatArea";
import RightPanel from "./components/RightPanel";

import socket from "@/socket";

import { useFetchUserQuery } from "@/store";
import { usePropsContext } from "@/hooks";

export default function MainPage() {
  const { data } = useFetchUserQuery();
  const { isRightPanelOpen } = usePropsContext();

  React.useEffect(() => {
    if (data) {
      socket.connect();
      socket.emit("subscribe", data._id);
    }

    return () => {
      socket.disconnect();
    };
  }, [data]);

  return (
    <div className="flex h-screen bg-black text-white font-poppins md:p-4">
      <Sidebar />
      <ChatArea />
      {isRightPanelOpen && <RightPanel data={data} />}
    </div>
  );
}
