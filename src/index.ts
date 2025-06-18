import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });  

interface User {
    socket: WebSocket;
    room: string;
}

let allSockets: WebSocket[] = []; // [socket1, socket2, socket3, ...]

wss.on("connection", (socket) => {

  socket.on("message", (message) => {
        const parsedMessage = JSON.parse(message);
        if (parsedMessage.type === "join") {
            allSockets.push({
                socket,
                room: parsedMessage.payload.roomId
            });
}
  })
 socket.on("disconnect", () => {
    allSockets = allSockets.filter(x => x != socket);
  })
 // Om Rana