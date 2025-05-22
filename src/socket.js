import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_BASEURL, {
  withCredentials: true,
});

const sendMessage = ({ receiverId, content }) => {
  socket.emit("message:send", { receiverId, content }, (res) => {
    console.log(res);
  });
};

const receiveMessage = (cb) => {
  socket.on("message:receive", cb);
};

const socketError = () => {
  socket.on("connect_error", (err) => console.error(err));
};

export default socket;
export { socketError, sendMessage, receiveMessage };
