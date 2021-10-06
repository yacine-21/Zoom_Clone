import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import StartMeeting from "../Components/StartMeeting";
import { io } from "socket.io-client";

let socket = io();

function MeetingRoom() {
  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();

  const joinRoom = () => {
    socket.emit("join-party", { roomId: roomId, userName: name });
  };

  useEffect(() => {
    const API_URL = "http://4b55-176-177-27-107.ngrok.io";
    socket = io(`${API_URL}`);
    socket.on("connect", () => {
      console.log("I'm connected booy!");
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
