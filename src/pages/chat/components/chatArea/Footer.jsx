import React from "react";
import { MdSend, MdAdd } from "react-icons/md";
import { Input, Icon } from "@/components/ui";

export default function Footer({ onSubmit }) {
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
    if (message.length) onSubmit({ content: message });
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
