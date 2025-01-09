import { useEffect } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import ChatRoom from "../components/ChatRoom/ChatRoom";

import socket from "../socket";
import { useFetchUserQuery } from "../store";

export default function MainPage() {
  const { data } = useFetchUserQuery();

  useEffect(() => {
    console.log(data);
    if (data) {
      socket.connect();
      socket.emit("subscribe", data._id);
    }

    return () => {
      socket.disconnect();
    };
  }, [data]);

  return (
    <div className="flex w-screen h-screen p-2 text-white bg-black lg:gap-x-2 font-poppins">
      <Sidebar />
      <ChatRoom />
    </div>
  );
}
