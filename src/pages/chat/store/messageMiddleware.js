import { sendMessage } from "@/socket";
import { addMessage } from "@/store";

const messageMiddleware = () => {
  return function (next) {
    return function (action) {
      next(action);

      if (addMessage.match(action)) {
        const { isSender, ...payload } = action.payload;
        if (isSender)
          sendMessage(payload, (res) => {
            console.log(res);
          });
      }
    };
  };
};

export default messageMiddleware;
