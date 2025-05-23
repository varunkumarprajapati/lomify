import { twMerge } from "tailwind-merge";
import { useSelector } from "react-redux";
export default function MessageBubble({ className = "", content, senderId }) {
  const { selectedUser } = useSelector((state) => state.chat);
  const isReceiver = senderId === selectedUser._id;
  return (
    <div
      className={twMerge(
        "flex items-center w-full px-6 mb-2",
        isReceiver ? "justify-start" : "justify-end",
        className
      )}
    >
      <div className="px-4 py-2 text-white bg-black bg-primary-500 rounded-3xl">
        {content}
      </div>
    </div>
  );
}
