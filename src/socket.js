import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_BASEURL, {
  withCredentials: true,
  autoConnect: false,
});

const sendMessage = (data, cb) => {
  socket.emit("message:send", data, cb);
};

const onReceiveMessage = (cb) => {
  socket.on("message:receive", cb);
};

const onUpdateMessageId = (cb) => {
  socket.on("message:update-id", cb);
};

const socketError = () => {
  socket.on("connect_error", (err) => console.error(err));
};

export default socket;
export { socketError, sendMessage, onReceiveMessage, onUpdateMessageId };
