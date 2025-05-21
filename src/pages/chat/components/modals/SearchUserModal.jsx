import { BiSearchAlt } from "react-icons/bi";
import { LuLoader } from "react-icons/lu";
import { IoMdArrowRoundBack } from "react-icons/io";

import { ModalContainer } from "@/components/common";
import { UserCard } from "@/components/Placeholders";
import { Input, Box, Icon } from "@/components/ui";
import UserList from "@/components/User/UserList";

import { useDebounce, useChatRoomContext } from "@/hooks";
import { useFetchUsersMutation } from "@/store";

export default function SearchUserModal({ isOpen = false, onClose }) {
  const debounce = useDebounce();
  const { setChatUser } = useChatRoomContext();

  const [searchUsers, { data: users = [], reset: resetUserList, isLoading }] =
    useFetchUsersMutation();

  const handleChange = (e) => {
    const { value } = e.target;
    if (!value.length) return;
    debounce(() => searchUsers(value), 1000);
  };

  const handleSelectUser = (user) => {
    setChatUser(user);
    handleClose();
  };

  const handleClose = () => {
    onClose();
    resetUserList();
  };

  let leftIcon = <BiSearchAlt className="mr-2 size-6 md:size-7" />;
  if (isLoading) {
    leftIcon = <LuLoader className="mr-2 animate-spin size-6 md:size-7" />;
  }

  let content = <NoResults />;
  if (users.length) {
    content = <UserList users={users} onClick={handleSelectUser} />;
  }

  if (!isOpen) return null;
  return (
    <ModalContainer>
      <div className="absolute inset-0 flex items-center justify-center bg-white/10">
        <div className="absolute flex flex-col w-full h-full bg-black md:bg-transparent gap-y-1 md:w-auto md:h-auto">
          <Box className="p-2 rounded-none md:rounded-2xl pt-12 md:pt-2">
            <h1 className="flex pb-3 text-xl font-semibold text-white gap-x-2">
              <Icon active icon={IoMdArrowRoundBack} onClick={handleClose} />
              Search here
            </h1>

            <Input
              solid
              leftIcon={leftIcon}
              className="border-2 border-white !rounded-xl"
              onChange={handleChange}
            />
          </Box>
          <Box className="md:min-h-[404px] flex flex-col items-center justify-center w-full h-full scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-800 text-white rounded-none md:rounded-2xl p-2 overflow-y-auto md:h-[404px]">
            {content}
          </Box>
        </div>
      </div>
    </ModalContainer>
  );
}

function NoResults() {
  return (
    <div className="py-12">
      <div className="flex flex-col items-center justify-center pb-4">
        <UserCard />
      </div>
      <div className="text-center">
        <p className="mb-2 text-lg">Oops... No Results Found</p>
        <p className="text-sm text-neutral-400">
          Don't worry, it happens sometimes.
          <br />
          Perhaps you could try entering a <br />
          different search term
        </p>
      </div>
    </div>
  );
}
