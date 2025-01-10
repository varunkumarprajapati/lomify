import { io } from "socket.io-client";

const socket = io(process.env.REACT_APP_BASEURL, {
  transports: ["websocket", "polling"],
  withCredentials: true,
});

const getSocketId = () =>
  socket.on("connect", () => {
    const { id } = socket;
    console.log(id);
  });
const socketError = () =>
  socket.on("connect_error", (err) => console.error(err));

export default socket;
export { getSocketId, socketError };
