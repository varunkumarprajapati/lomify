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
    if (message.length) onSubmit(message);
    setTyping(false);
    setMessage("");
  };

  return (
    <div className="flex items-center justify-between w-full h-16 p-6 bg-neutral-800">
      <form className="flex w-full" autoComplete="off" onSubmit={handleSubmit}>
        <Icon icon={MdAdd} size="32" />
        <Input
          value={message}
          name="message"
          className="w-full px-5 mx-4 rounded-3xl bg-neutral-700"
          placeholder="Type a message"
          onChange={handleChange}
        />
        <Icon icon={MdSend} size="28" name="send" type="submit" />
      </form>
    </div>
  );
}
