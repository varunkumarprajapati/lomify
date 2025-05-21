import { useState } from "react";
import { MdSearch } from "react-icons/md";

import { Box, Icon } from "@/components/ui";
import UserProfile from "./UserProfile";
import ChatList from "./ChatList";
import SearchUserModal from "../modals/SearchUserModal";

export default function Sidebar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <aside className=" flex flex-col">
      <Box className="relative mb-2 px-3 py-2">
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

      <SearchUserModal isOpen={isOpen} onClose={() => setOpen(false)} />
    </aside>
  );
}
