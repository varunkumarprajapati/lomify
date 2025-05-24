import { twMerge } from "tailwind-merge";

const Icon = ({
  className = "",
  icon: Icon,
  size = 20,
  disabled,
  type = "button",
  plain = false,
  active = false,
  visibility = true,
  ...props
}) => {
  if (!visibility) return null;
  return (
    <button
      type={type}
      disabled={disabled}
      className={twMerge(
        "flex justify-center items-center flex-shrink-0 flex-grow-0 cursor-pointer",
        active &&
          "rounded-full bg-neutral-700 hover:bg-neutral-600 hover:scale-110 transition p-1",
        plain && "",
        className
      )}
      {...props}
    >
      <Icon size={size} className="w-full h-full" />
    </button>
  );
};

export default Icon;
