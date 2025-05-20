import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";

export default function Input({
  autoComplete,
  className = "",
  error,
  label,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  name,
  onChange,
  placeholder,
  showToggle = false,
  type = "text",
  value,
  plain = false,
  solid = false,
  outline = false,
  ...rest
}) {
  const [isVisible, setVisible] = useState(false);
  const inputType =
    showToggle && type === "password"
      ? isVisible
        ? "text"
        : "password"
      : type;

  return (
    <div className="flex flex-col items-start justify-center w-full">
      {label && (
        <label
          htmlFor={name}
          className={twMerge(
            "block mb-1 text-sm font-medium",
            solid && "text-neutral-400"
          )}
        >
          {label}
        </label>
      )}

      <div
        className={twMerge(
          "flex items-center w-full px-2.5 md:py-1 py-2 rounded-md bg-white text-black",
          outline &&
            "border-2 border-black focus-within:border-blue-500 focus-within:duration-200 focus-within:transition-color",
          solid && "bg-neutral-700 text-white",
          error && "!border-red-500",
          className
        )}
      >
        {LeftIcon && LeftIcon}
        <input
          autoComplete={autoComplete}
          className="flex-1 w-full bg-transparent focus:outline-none"
          id={name}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          type={inputType}
          value={value}
          {...rest}
        />
        {RightIcon && RightIcon}

        {showToggle && type === "password" && !error && (
          <button
            type="button"
            className="focus-visible:outline-none"
            onClick={() => setVisible((prev) => !prev)}
          >
            {isVisible ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
          </button>
        )}

        {error && (
          <MdErrorOutline className="text-red-500 bg-transparent size-5" />
        )}
      </div>

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
