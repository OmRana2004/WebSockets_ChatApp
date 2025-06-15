import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });  

let userCount = 0;
let allSockets: WebSocket[] = []; // [socket1, socket2, socket3, ...]

wss.on("connection", (socket) => {
    allSockets.push(socket);

    userCount = userCount + 1;
    console.log("user connected #" + userCount);

    socket.on("message", (message) => {
        console.log("message received: " + message.toString());
        allSockets.forEach(s => {
            s.send(message.toString() + ": sent from the server");
        })
        
    })
})
