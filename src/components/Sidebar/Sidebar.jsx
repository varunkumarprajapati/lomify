import { useState } from "react";
import { MdSearch } from "react-icons/md";

import { Box, Icon } from "../ui";
import Profile from "./Profile/Profile";
import ChatList from "./ChatList/ChatList";
import SearchUserModal from "../Modals/SearchUserModal";

export default function Sidebar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <aside className="flex flex-col w-full h-full lg:p-0 gap-y-2 lg:max-w-80">
      <Box className="relative">
        <Icon
          active
          icon={MdSearch}
          onClick={() => setOpen(true)}
          className="absolute bg-transparent top-2 right-2"
        />
        <Profile />
      </Box>
      <Box className="h-full">
        <ChatList />
      </Box>

      <SearchUserModal isOpen={isOpen} onClose={() => setOpen(false)} />
    </aside>
  );
}
