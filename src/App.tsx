import { Client, CompatClient, Stomp } from "@stomp/stompjs";
import { subscribe } from "diagnostics_channel";
import { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";

import "./styles/form.css";
import uuid from "react-uuid";
import Chat from "./components/Chat";
import { useNavigate } from "react-router-dom";

interface IChatProps {
  channelId: string;
  writerId: string;
  message: string;
}

export default function App() {
  const [chatList, setChatList] = useState<IChatProps[]>([]);
  const [chat, setChat] = useState("");
  const [id, setId] = useState("0");
  const nav = useNavigate();

  let client = useRef<CompatClient>();

  const connectHandler = async () => {
    const token = await JSON.parse(localStorage.getItem("accessToken") || "{}");
    client.current = await Stomp.over(() => {
      const sock = new SockJS("http://nineto6.kro.kr:8080/ws");
      return sock;
    });

    console.log(`token: ${token}`);

    client.current.connect(
      {
        Authorization: `Bearer ${token}`,
      },
      () => {
        client.current?.subscribe(`/sub/chat/${id}`, (body) => {
          const json_body = JSON.parse(body.body);
          setChatList((_chat_list) => [..._chat_list, json_body]);
        });
      },
      () => {
        alert("error");
        nav("/login");
      }
    );

    client.current.onStompError = (frame) => {
      console.log("Broker reported error: " + frame.headers["message"]);
      console.log("Additional details: " + frame.body);
    };
  };

  const publish = (chat: string) => {
    client.current?.publish({
      destination: "/pub/chat",
      body: JSON.stringify({
        channelId: id,
        writerId: id,
        message: chat,
      }),
    });
  };

  const handleChange = (event: any) => {
    setChat(event.target.value);
  };
  const handleSubmit = (event: any, chat: string) => {
    event.preventDefault();

    publish(chat);
    setChat("");
  };

  useEffect(() => {
    connectHandler();
  }, []);

  console.log(typeof chatList);
  console.log(chatList);

  return (
    <div>
      {chatList?.map((value) => (
        <Chat key={uuid()} text={value.message} />
      ))}
      <form
        className="textForm"
        onSubmit={(event) => handleSubmit(event, chat)}
      >
        <div className="textBox">
          <input
            className="textBoxInput"
            type={"text"}
            name={"chatInput"}
            onChange={handleChange}
            value={chat}
          />
        </div>
        <input type={"submit"} value={"의견 보내기"} className="textSubmit" />
      </form>
    </div>
  );
}
