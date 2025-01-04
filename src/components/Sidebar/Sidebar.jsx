import Profile from "./Profile/Profile";
import ChatList from "./ChatList/ChatList";
import { Box } from "../common";

export default function Sidebar() {
  return (
    <aside className="flex flex-col w-full h-full lg:p-0 gap-y-2 lg:max-w-80">
      <Box>
        <Profile />
      </Box>
      <Box className="h-full">
        <ChatList />
      </Box>
    </aside>
  );
}
