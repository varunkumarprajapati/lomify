import { useState } from "react";
import { toast } from "react-toastify";

import { ModalContainer } from "../common";
import { Input, Button } from "../ui";

import { useFetchUsersMutation } from "../../store";
import { usePropsContext, useChatRoomContext } from "../../hooks";

export default function SearchUserModal({ onCancel }) {
  const { setChatUser } = useChatRoomContext();

  const [fetchUsers, { isLoading }] = useFetchUsersMutation();

  const [query, setQuery] = useState("");
  const [searchedUser, setSearchedUser] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!query.length) return toast.warning("Please enter something.");

    const { data } = await fetchUsers({ username: query });
    if (data.message) return toast.warning(data.message);

    setSearchedUser(data);
  };

  const handleSelectUserClick = (user) => {
    setChatUser(() => {
      onCancel();
      return user;
    });
  };

  return (
    <ModalContainer>
      <div className="fixed inset-0 flex items-center justify-center overflow-hidden text-white bg-white bg-opacity-10">
        <div className="fixed w-screen h-screen px-6 py-4 bg-black lg:w-fit lg:px-4 lg:h-fit lg:rounded-xl">
          <div className="flex flex-col justify-center w-full h-full gap-y-4">
            {searchedUser?.name && (
              <User
                {...searchedUser}
                onClick={() => handleSelectUserClick(searchedUser)}
              />
            )}

            <form
              className="flex flex-col items-center gap-y-2"
              onSubmit={handleSubmit}
            >
              <Input
                solid
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by username"
                className="!text-sm p-2"
              />

              <div className="flex items-center w-full *:w-full gap-x-2">
                <Button active loading={isLoading}>
                  Search
                </Button>
                <Button cancel onClick={onCancel}>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
}

function User({ avatar, email, about, onClick }) {
  const { avatars } = usePropsContext();

  return (
    <div
      className="flex items-center justify-start px-4 py-2 transition-colors rounded-lg cursor-pointer select-none gap-x-4 hover:bg-neutral-800"
      onClick={onClick}
    >
      <img
        draggable="false"
        src={avatars[avatar]}
        alt="avatar"
        className="rounded-full w-14"
      />
      <div className="flex flex-col justify-center items-starts ">
        <p className="">{email}</p>
        <p className="text-sm text-neutral-400">{about}</p>
      </div>
    </div>
  );
}
