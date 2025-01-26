import { useContext } from "react";
import ChatRoomContext from "../context/ChatRoomContext";

export default function useChatRoomContext() {
  return useContext(ChatRoomContext);
}
