import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import StartMeeting from "../Components/StartMeeting";
import { io } from "socket.io-client";

let socket;

function MeetingRoom() {
  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();

  const joinRoom = () => {
    socket.emit("join-room", { roomId: roomId, userName: name });
  };

  useEffect(() => {
    const API_URL = "http://064e-176-177-27-107.ngrok.io";
    socket = io(`${API_URL}`);
    socket.on("connection", () => {
      console.log("connected");
    });
  }, []);

  return (
    <View style={styles.container}>
      <StartMeeting
        name={name}
        setName={setName}
        roomId={roomId}
        setRoomId={setRoomId}
        joinRoom={joinRoom}
      />
    </View>
  );
}

export default MeetingRoom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
});
