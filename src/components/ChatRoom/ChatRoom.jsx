import { useState } from "react";
import { MdSend, MdAdd } from "react-icons/md";

import Header from "./Header/Header";
import Message from "../Message/Message";
import { Icon, Input } from "../common";

import usePropsContext from "../../hooks/use-PropsContext";

export default function ChatRoom() {
  const { isChatOpen, messages, setMessages } = usePropsContext();

  const handleSubmit = (msg) => {
    setMessages((prev) => {
      return [...prev, { content: msg }];
    });
  };

  return (
    <div className="hidden w-full h-full rounded-lg lg:flex bg-neutral-900">
      {isChatOpen ? (
        <div className="flex flex-col items-center w-full h-full overflow-hidden rounded-lg bg-inherit ">
          <Header />
          <ChatArea messages={messages} />
          <Footer onSubmit={handleSubmit} />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full text-center rounded-lg bg-neutral-800">
          <h1 className="text-4xl font-bold text-white">Lomify</h1>
          <p className="mt-4 text-lg text-gray-400">A Chat Application</p>
          <p className="mt-2 text-gray-400 text-md">
            To start chatting, select a chat from the chat list.
          </p>
        </div>
      )}
    </div>
  );
}

function ChatArea({ messages }) {
  return (
    <div className="w-full h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-800">
      {messages.map((message, index) => (
        <Message key={index} {...message} />
      ))}
    </div>
  );
}

function Footer({ onSubmit }) {
  const [message, setMessage] = useState("");
  const [isTyping, setTyping] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setTyping(true);
    setMessage(value);
    message.length && setInterval(() => setTyping(false), 3000);
    isTyping && clearInterval();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(message);
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
