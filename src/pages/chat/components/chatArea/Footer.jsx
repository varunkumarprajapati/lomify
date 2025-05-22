import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdSend, MdAdd } from "react-icons/md";

import { Input, Icon } from "@/components/ui";
import { addMessage } from "@/store";
import { sendMessage } from "@/socket";

export default function Footer() {
  const dispatch = useDispatch();
  const receiverId = useSelector((state) => state.chat.selectedUser._id);

  const [message, setMessage] = React.useState("");
  const [isTyping, setTyping] = React.useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setTyping(true);
    setMessage(value);
    message.length && setInterval(() => setTyping(false), 3000);
    isTyping && clearInterval();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.length) return;

    const msg = {
      content: message,
      receiverId,
    };

    dispatch(addMessage(msg));
    sendMessage(msg);

    setTyping(false);
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
