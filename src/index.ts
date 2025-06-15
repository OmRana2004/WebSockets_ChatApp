import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });  

let allSockets: WebSocket[] = []; // [socket1, socket2, socket3, ...]

wss.on("connection", (socket) => {
    allSockets.push(socket);

    console.log("user connected #");

    socket.on("message", (message) => {
        console.log("message received: " + message.toString());
        allSockets.forEach(s => {
            s.send(message.toString() + ": sent from the server");
        })
        
    })
})
