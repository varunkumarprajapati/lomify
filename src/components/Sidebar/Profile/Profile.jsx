import { useState } from "react";

import UpdateUserModal from "../../Modals/UpdateUserModal";
import ProfileLoading from "../../LoadingScreen/ProfileLoading";

import { useFetchUserQuery } from "../../../store";
import usePropsContext from "../../../hooks/use-PropsContext";

export default function Profile() {
  const [isModalOpen, setModalOpen] = useState(false);
  const { data: user, isLoading } = useFetchUserQuery();
  const { avatars } = usePropsContext();

  const handleCloseModal = (e) => {
    e.stopPropagation();
    setModalOpen(false);
  };

  return (
    <>
      {isLoading ? (
        <ProfileLoading />
      ) : (
        <div
          className="h-full py-4 cursor-pointer lg:py-2 lg:px-4"
          onClick={() => setModalOpen(true)}
        >
          <div className="flex flex-row items-center justify-start h-full md:gap-x-8 lg:gap-x-2 gap-x-2">
            <img
              draggable="false"
              src={avatars[user?.avatar]}
              alt="avatar"
              className="flex items-center justify-center flex-shrink-0 w-20 rounded-full md:w-32 lg:w-16"
            />

            <div className="flex flex-col">
              <p className="text-lg font-semibold md:text-3xl lg:text-sm">
                {user?.name}
              </p>
              <p className="text-sm md:text-xl lg:text-xs text-neutral-400">
                {user?.email}
              </p>
            </div>
          </div>

          {isModalOpen && (
            <UpdateUserModal {...user} onClose={handleCloseModal} />
          )}
        </div>
      )}
    </>
  );
}
