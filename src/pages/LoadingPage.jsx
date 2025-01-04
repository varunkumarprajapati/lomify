import { FaRocketchat } from "react-icons/fa";

export default function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen text-white bg-black">
      <h1 className="font-bold text-8xl">Lomify </h1>
      <span className="animate-loading text-8xl">
        <FaRocketchat />
      </span>
    </div>
  );
}
