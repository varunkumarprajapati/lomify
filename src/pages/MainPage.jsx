import Sidebar from "../components/Sidebar/Sidebar";
import ChatRoom from "../components/ChatRoom/ChatRoom";

export default function MainPage() {
  return (
    <div className="flex w-screen h-screen p-2 text-white bg-black lg:gap-x-2 font-poppins">
      <Sidebar />
      <ChatRoom />
    </div>
  );
}
