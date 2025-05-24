import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { useDispatch } from "react-redux";

import { Box, Icon } from "@/components/ui";
import UserProfile from "./UserProfile";
import ChatList from "./ChatList";
import SearchUserModal from "../modals/SearchUserModal";

import useMobile from "../../hooks/useMobile";
import useChatContext from "../../hooks/useChatContext";
import { setSelectedUser } from "@/store";

export default function Sidebar() {
  const dispatch = useDispatch();
  const isMobile = useMobile();
  const { isChatting } = useChatContext();
  const [isOpen, setOpen] = useState(false);

  const handleSelectUser = (user) => {
    dispatch(setSelectedUser(user));
  };

  if (isMobile && isChatting) return null;
  return (
    <aside className="flex flex-col w-full md:w-fit p-2 md:p-0">
      <Box className="relative mb-2 px-4 py-3">
        <Icon
          active
          icon={MdSearch}
          onClick={() => setOpen(true)}
          className="absolute bg-transparent top-2 right-2"
        />
        <UserProfile />
      </Box>
      <Box className="flex-1 overflow-y-auto">
        <ChatList />
      </Box>

      <SearchUserModal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        onSelectUser={handleSelectUser}
      />
    </aside>
  );
}
