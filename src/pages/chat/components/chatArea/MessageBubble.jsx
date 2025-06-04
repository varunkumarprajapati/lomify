import { twMerge } from "tailwind-merge";
import { useSelector } from "react-redux";
import { IoCheckmarkDone, IoCheckmark } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";

export default function MessageBubble({
  content,
  senderId,
  createdAt,
  status,
}) {
  const { selectedUser } = useSelector((state) => state.chat);
  const isReceiver = senderId === selectedUser._id;

  let timestamp = new Date(createdAt);
  timestamp = timestamp.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const statusIcons = {
    sent: (
      <IoCheckmark className="size-4 ml-1 text-gray-400 dark:text-gray-500" />
    ),
    delivered: (
      <IoCheckmarkDone className="size-4 ml-1 text-gray-400 dark:text-gray-500" />
    ),
    read: (
      <IoCheckmarkDone className="size-4 ml-1 text-blue-600 dark:text-blue-400" />
    ),
    pending: (
      <MdOutlineWatchLater className="size-3 ml-1 text-blue-500 dark:text-blue-300 animate-pulse" />
    ),
  };

  const statusIcon = statusIcons[status] || null;

  return (
    <div className={isReceiver ? "flex justify-start" : "flex justify-end"}>
      <div className="max-w-[80%]">
        <div
          className={twMerge(
            "px-4 py-2 text-sm",
            isReceiver
              ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-r-lg rounded-bl-lg"
              : "bg-blue-600 dark:bg-blue-700 text-white dark:text-blue-50 rounded-l-lg rounded-br-lg"
          )}
        >
          {content}
        </div>

        <div
          className={twMerge(
            "flex items-center mt-1 text-[11px]",
            isReceiver
              ? "text-gray-500 dark:text-gray-400 justify-start"
              : "text-gray-500 dark:text-gray-400 justify-end"
          )}
        >
          <span>{timestamp}</span>
          {!isReceiver && statusIcon}
        </div>
      </div>
    </div>
  );
}
