import { twMerge } from "tailwind-merge";

export default function Icon({
  className,
  icon: Icon,
  size = 20,
  disabled,
  plain,
  active,
  ...props
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={twMerge(
        "flex justify-center items-center flex-shrink-0 flex-grow-0",
        active &&
          "rounded-full bg-neutral-700 hover:bg-neutral-600 hover:scale-110 transition p-1",
        plain && "",
        className
      )}
      {...props}
    >
      <Icon size={size} />
    </button>
  );
}
