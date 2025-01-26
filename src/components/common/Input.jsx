import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import Icon from "./Icon";

export default function Input({
  className,
  placeholder,
  name,
  type = "text",
  onChange,
  outline,
  solid,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  const commonClasses = "w-full rounded-lg px-3 py-2 lg:text-base text-lg";

  return (
    <>
      {type === "password" ? (
        <div
          className={twMerge(
            "flex items-center",
            commonClasses,
            outline && "border-2 border-gray-300",
            solid && "bg-gray-200 text-black placeholder:text-neutral-500",
            className
          )}
        >
          <input
            id={name}
            name={name}
            placeholder={placeholder}
            type={showPassword ? "text" : type}
            className="w-full focus:outline-none bg-inherit"
            onChange={onChange}
            {...props}
          />
          <Icon
            plain
            size="20"
            className="text-gray-500"
            icon={showPassword ? FaEye : FaEyeSlash}
            onClick={handleClick}
          />
        </div>
      ) : (
        <input
          name={name}
          placeholder={placeholder}
          type={type}
          id={name}
          className={twMerge(
            "focus:outline-none bg-inherit",
            commonClasses,
            outline && "border-2 border-gray-300",
            solid && "bg-gray-200 text-black placeholder:text-neutral-500",
            className
          )}
          onChange={onChange}
          {...props}
        />
      )}
    </>
  );
}
