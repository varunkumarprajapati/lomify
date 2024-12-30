import { twMerge } from "tailwind-merge";

export default function Icon({
  className,
  icon: Icon,
  size = 24,
  plain,
  ...props
}) {
  return (
    <button
      type="button"
      className={twMerge(plain && "", className)}
      {...props}
    >
      <Icon size={size} />
    </button>
  );
}
