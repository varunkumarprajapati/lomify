import { usePropsContext } from "@/hooks";
export default function UserListItem({ avatar, username, email, onClick }) {
  const { avatars } = usePropsContext();

  return (
    <li
      className="flex items-center justify-start w-full px-4 py-2 transition-colors cursor-pointer select-none rounded-xl gap-x-4 hover:bg-neutral-800"
      onClick={onClick}
    >
      <img
        draggable="false"
        src={avatars[avatar]}
        alt="avatar"
        className="rounded-full w-14"
      />
      <div className="flex flex-col justify-center items-starts ">
        <p className="">{username}</p>
        <p className="text-sm text-neutral-400">{email}</p>
      </div>
    </li>
  );
}
