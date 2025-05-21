import { useEffect } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import ChatRoom from "../components/ChatRoom/ChatRoom";
import RightPanel from "../components/RightPanel/RightPanel";

import socket from "../socket";

import { useFetchUserQuery } from "../store";
import { usePropsContext } from "../hooks";

export default function MainPage() {
  const { data } = useFetchUserQuery();
  const { isRightPanelOpen } = usePropsContext();

  useEffect(() => {
    if (data) {
      socket.connect();
      socket.emit("subscribe", data._id);
    }

    return () => {
      socket.disconnect();
    };
  }, [data]);

  return (
    <div className="flex w-screen h-screen p-4 text-white bg-black lg:gap-x-2 font-poppins">
      <Sidebar />
      <ChatRoom />
      {isRightPanelOpen && <RightPanel data={data} />}
    </div>
  );
}
