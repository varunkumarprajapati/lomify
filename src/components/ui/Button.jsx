import { twMerge } from "tailwind-merge";
import { BiLoaderAlt } from "react-icons/bi";

export default function Button({
  children,
  className,
  type = "submit",
  solid = false,
  outline = false,
  active = false,
  cancel = false,
  loading,
  ...props
}) {
  return (
    <button
      disabled={loading}
      type={cancel ? "reset" : type}
      className={twMerge(
        loading && "bg-opacity-80",
        "w-fit rounded-md px-4 py-2 flex justify-center items-center lg:text-base text-lg transition-colors duration-200",
        outline &&
          "border-2 px-3.5 py-1.5 border-black font-semibold hover:bg-slate-200/30",
        solid && "bg-black text-white hover:bg-black/90",
        active && "bg-blue-600 hover:bg-blue-700 text-white",
        cancel && "bg-gray-600 hover:bg-gray-700 text-white",
        className
      )}
      {...props}
    >
      {loading ? <BiLoaderAlt size="24" className="animate-spin " /> : children}
    </button>
  );
}
