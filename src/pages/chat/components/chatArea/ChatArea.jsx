import React from "react";
import { useSelector } from "react-redux";

import Header from "./Header";
import Footer from "./Footer";
import ChatMessages from "./ChatMessages";
import { Box } from "@/components/ui";
import ChatSVG from "@/assets/chat.svg";
import useMobile from "../../hooks/useMobile";
import useChatContext from "../../hooks/useChatContext";

export default function ChatArea() {
  const isMobile = useMobile();
  const { isChatting } = useChatContext();
  const { selectedUser } = useSelector((state) => state.chat);

  if (isMobile && !isChatting) return null;

  return (
    <Box className="md:ml-2 flex-1 h-full overflow-hidden md:block rounded-none md:rounded-lg">
      {selectedUser ? (
        <main className="h-full flex flex-col">
          <Header />
          <ChatMessages />
          <Footer />
        </main>
      ) : (
        <NoChat />
      )}
    </Box>
  );
}

function NoChat() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full text-center">
      <img src={ChatSVG} alt="chats" className="w-56 h-56" />
      <h1 className="text-4xl font-bold text-white">Lomify</h1>
      <p className="mt-4 text-lg text-gray-400">A Chat Application</p>
      <p className="mt-2 text-gray-400 text-md">
        To start chatting, select a chat from the chat list.
      </p>
    </div>
  );
}
