import { createContext, useState } from "react";

const PropsContext = createContext();

function PropsProvider({ children }) {
  const [isChatOpen, setChatOpen] = useState(true);
  const [isRightPanelOpen, setRightPanelOpen] = useState(false);
  const [messages, setMessages] = useState([
    { content: "Hello" },
    { content: "Hi" },
    { content: "heloo there i am varun https://www.google.com" },
    { content: "On development" },
    { content: "On development,chats are model" },
  ]);

  const avatars = {
    brook: "/images/brook.webp",
    chopper: "/images/chopper.webp",
    corazon: "/images/corazon.webp",
    eneru: "/images/eneru.webp",
    franky: "/images/franky.webp",
    fujitora: "/images/fujitora.webp",
    luffy: "/images/luffy.webp",
    luffy4: "/images/luffy4.webp",
    luffy5: "/images/luffy5.webp",
    marco: "/images/marco.webp",
    merry: "/images/merry.webp",
    robin: "/images/robin.webp",
    roger: "/images/roger.webp",
    sanji: "/images/sanji.webp",
    shanks: "/images/shanks.webp",
    smoker: "/images/smoker.webp",
    sunny: "/images/sunny.webp",
    usopp: "/images/usopp.webp",
    uta: "/images/uta.webp",
    yamato: "/images/yamato.webp",
    zoro: "/images/zoro.webp",
  };

  const data = {
    avatars,
    isChatOpen,
    setChatOpen,
    messages,
    setMessages,
    isRightPanelOpen,
    setRightPanelOpen,
  };
  return <PropsContext.Provider value={data}>{children}</PropsContext.Provider>;
}

export default PropsContext;
export { PropsProvider };
