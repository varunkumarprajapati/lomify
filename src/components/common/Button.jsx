import { twMerge } from "tailwind-merge";
import { BiLoaderAlt } from "react-icons/bi";

export default function Button({
  children,
  className,
  type = "submit",
  solid,
  outline,
  loading,
  ...props
}) {
  return (
    <button
      type={type}
      className={twMerge(
        "w-full rounded-md px-3 py-2 flex justify-center items-center lg:text-base text-lg",
        outline && "border-2 border-black font-semibold",
        solid && "bg-black text-white",
        className
      )}
      {...props}
    >
      {loading ? <BiLoaderAlt size="24" className="animate-spin " /> : children}
    </button>
  );
}
