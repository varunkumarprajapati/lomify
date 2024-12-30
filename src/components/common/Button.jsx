import { twMerge } from "tailwind-merge";
import { BiLoaderAlt } from "react-icons/bi";

export default function Button({
  children,
  className,
  type = "submit",
  solid,
  outline,
  active,
  cancel,
  loading,
  ...props
}) {
  return (
    <button
      disabled={loading}
      type={type}
      className={twMerge(
        loading && "bg-opacity-80",
        "w-fit rounded-md px-4 py-2 flex justify-center items-center lg:text-base text-lg",
        outline && "border-2 border-black font-semibold",
        solid && "bg-black text-white",
        active && "bg-blue-500 hover:bg-blue-600 text-white",
        cancel && "bg-gray-300 hover:bg-gray-400",
        className
      )}
      {...props}
    >
      {loading ? <BiLoaderAlt size="24" className="animate-spin " /> : children}
    </button>
  );
}
