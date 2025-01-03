import Sidebar from "../components/Sidebar/Sidebar";
import ChatRoom from "../components/ChatRoom/ChatRoom";

export default function MainPage() {
  return (
    <div className="w-screen h-screen text-white bg-black lg:p-2 font-poppins">
      <div className="flex flex-row w-full h-full lg:gap-x-2">
        <Sidebar />
        <ChatRoom />
      </div>
    </div>
  );
}
