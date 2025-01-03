import Profile from "./Profile/Profile";
import ChatList from "./ChatList/ChatList";
import { Box } from "../common";

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-y-2 min-w-80">
      <Box>
        <Profile />
      </Box>
      <Box className="h-full">
        <ChatList />
      </Box>
    </div>
  );
}
