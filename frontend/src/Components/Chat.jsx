import React, { useContext } from "react";
import Add from "../Pictures2/add.png";
import More from "../Pictures2/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/chat-context-firebase";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input magic = {data.user?.displayName}/>
    </div>
  );
};

export default Chat;