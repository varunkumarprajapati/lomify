import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdSend, MdAdd } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

import { Input, Icon } from "@/components/ui";
import { addMessage } from "@/store";

export default function Footer() {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.chat);

  const [message, setMessage] = React.useState("");

  const handleChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.length) return;

    const msg = {
      _id: uuidv4(),
      content: message,
      receiverId: selectedUser._id,
      isSender: true,
      createdAt: new Date().toString(),
    };
    
    dispatch(addMessage(msg));
    setMessage("");
  };

  return (
    <footer className="bg-neutral-800 px-3 py-4 md:p-6">
      <form
        className="flex items-center gap-x-2 w-full"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Icon icon={MdAdd} className="size-8 md:size-7" />
        <Input
          solid
          value={message}
          name="message"
          className="rounded-3xl !px-4 !py-2"
          placeholder="Type a message"
          onChange={handleChange}
        />
        <Icon
          icon={MdSend}
          type="submit"
          className="size-8 hover:text-primary md:size-7"
        />
      </form>
    </footer>
  );
}
