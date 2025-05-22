import React from "react";
import { BsTrash } from "react-icons/bs";
import { MdArrowForward } from "react-icons/md";

import { Icon } from "@/components/ui";

import { usePropsContext } from "@/hooks";
import { useSelector } from "react-redux";

export default function ChatRightPanel({ isOpen }) {
  const { selectedUser } = useSelector((state) => state.chat);
  const { avatars, setRightPanelOpen } = usePropsContext();

  if (!isOpen) return null;
  return (
    <div className="md:ml-2 absolute inset-0 flex-col items-center justify-center h-full overflow-hidden lg:relative lg:rounded-lg lg:min-w-96 bg-neutral-900">
      <div className="flex items-center w-full p-4 text-lg gap-x-2 text-neutral-100 bg-neutral-800">
        <Icon
          active
          icon={MdArrowForward}
          onClick={() => setRightPanelOpen(false)}
        />
        Contact info
      </div>

      <div className="flex flex-col items-center w-full h-full space-y-2 overflow-y-auto">
        <div className="flex flex-col items-center justify-center w-full p-4 gap-y-2 bg-neutral-800">
          <img
            src={avatars[selectedUser.avatar]}
            alt="avatar"
            className="rounded-full w-52"
          />

          <div className="flex flex-col items-center">
            <p className="text-xl font-semibold text-neutral-100">
              {selectedUser.name}
            </p>
            <p className="text-neutral-500">{selectedUser.email}</p>
          </div>
        </div>

        <div className="flex items-center w-full p-4 text-red-600 cursor-pointer gap-x-2 bg-neutral-800 hover:bg-neutral-700">
          <Icon icon={BsTrash} /> Delete Chat
        </div>
      </div>
    </div>
  );
}
