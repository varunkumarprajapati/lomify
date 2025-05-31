import { sendMessage } from "@/socket";
import { addMessage } from "@/store";

const messageMiddleware = () => (next) => (action) => {
  next(action);

  if (addMessage.match(action)) {
    const { isSender, ...payload } = action.payload;
    if (isSender) sendMessage(payload, (ack) => {});
  }
};

export default messageMiddleware;
