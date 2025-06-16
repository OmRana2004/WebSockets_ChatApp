"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let allSockets = []; // [socket1, socket2, socket3, ...]
wss.on("connection", (socket) => {
    allSockets.push(socket);
    console.log("user connected #");
    socket.on("message", (message) => {
        console.log("message received: " + message.toString());
        allSockets.forEach(s => {
            s.send(message.toString() + ": sent from the server");
        });
    });
});
/*


*/ 
