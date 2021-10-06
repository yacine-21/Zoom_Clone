const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const port = 3001;

app.get("/", (req, res) => {
  res.send("hello world");
});

io.on("connect", (socket) => {
  console.log("Someone Connected");
  socket.on("join-party", ({ roomId, userName }) => {
    console.log("user Joined room");
    console.log(roomId);
    console.log(userName);
  });
});
server.listen(port, () => {
  console.log("Zoom Clone API listening on localhost:3001");
});
