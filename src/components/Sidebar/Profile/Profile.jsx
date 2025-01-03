import ProfileLoading from "../../LoadingScreen/ProfileLoading";

import { useFetchUserQuery } from "../../../store";
import usePropsContext from "../../../hooks/use-PropsContext";

export default function Profile() {
  const { data: user, isLoading } = useFetchUserQuery();
  const { avatars } = usePropsContext();

  return (
    <>
      {isLoading ? (
        <ProfileLoading />
      ) : (
        <div className="h-full px-6 py-2 cursor-pointer">
          <div className="flex flex-row items-center justify-center flex-shrink-0 h-full gap-x-2">
            <img
              draggable="false"
              src={avatars[user?.avatar]}
              alt="avatar"
              className="flex items-center justify-center flex-shrink-0 w-16 rounded-full"
            />
            <div className="flex flex-col">
              <p className="text-sm font-semibold">{user?.name}</p>
              <p className="text-xs text-neutral-400">{user?.email}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
