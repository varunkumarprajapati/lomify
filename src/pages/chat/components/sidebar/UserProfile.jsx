import { useState } from "react";

import UpdateUserModal from "@/pages/chat/components/modals/UpdateUserModal";

import { useFetchUserQuery } from "@/store";
import usePropsContext from "@/hooks/use-PropsContext";

export default function UserProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: user } = useFetchUserQuery();
  const { avatars } = usePropsContext();

  const handleModalClose = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <section onClick={() => setIsOpen(true)}>
      <div className="flex items-center gap-3">
        <img
          draggable="false"
          src={avatars[user.avatar]}
          alt="avatar"
          className="w-16 h-16 rounded-full"
        />

        <div>
          <p className="font-semibold">{user.name}</p>
          <p className="text-sm text-neutral-400">{user.email}</p>
        </div>
      </div>

      <UpdateUserModal {...user} onClose={handleModalClose} isOpen={isOpen} />
    </section>
  );
}
