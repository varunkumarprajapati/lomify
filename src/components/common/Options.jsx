import React from "react";
import { twMerge } from "tailwind-merge";

export default function Options({ options = [], className }) {
  return (
    <div
      className={twMerge(
        "absolute rounded right-2 top-16 w-fit h-fit bg-neutral-700 select-none",
        className
      )}
    >
      <ul className="py-1 ">
        {options.map(({ title, onClick }) => {
          return (
            <li
              key={title}
              className="flex items-center w-full px-3 py-2 cursor-pointer hover:bg-neutral-800"
              onClick={onClick}
            >
              <span>{title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
