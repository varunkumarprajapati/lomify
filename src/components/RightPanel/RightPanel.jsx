import React from "react";
import { BsTrash } from "react-icons/bs";
import { MdArrowForward } from "react-icons/md";

import { Icon } from "../ui";

import usePropsContext from "../../hooks/use-PropsContext";

export default function RightPanel({ data }) {
  const { avatars, setRightPanelOpen } = usePropsContext();

  return (
    <div className="absolute inset-0 flex-col items-center justify-center h-full overflow-hidden lg:relative lg:rounded-lg lg:min-w-96 bg-neutral-900">
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
            src={avatars[data?.avatar]}
            alt="avatar"
            className="rounded-full w-52"
          />

          <div className="flex flex-col items-center">
            <p className="text-xl font-semibold text-neutral-100">
              {data?.name}
            </p>
            <p className="text-neutral-500">{data?.email}</p>
          </div>
        </div>

        <div className="flex items-center w-full p-4 text-red-600 cursor-pointer gap-x-2 bg-neutral-800 hover:bg-neutral-700">
          <Icon icon={BsTrash} /> Delete Chat
        </div>
      </div>
    </div>
  );
}
