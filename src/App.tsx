import { Client, CompatClient, Stomp } from "@stomp/stompjs";
import { subscribe } from "diagnostics_channel";
import { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";
import { WebSocket } from "ws";
import Chat from "./components/Chat";
import { styled } from "styled-components";
import "./styles/form.css";
import uuid from "react-uuid";

// function connect(id: any, setChatList: any) {
//   let client = new Client({
//     brokerURL: `ws://172.30.1.31:8080/ws`,
//     onConnect: () => {
//       client.subscribe(`/sub/chat/${id}`, (message) => {
//         const json_body = JSON.parse(message.body);
//         setChatList((_chat_list: any) => [..._chat_list, json_body]);
//       });
//       // client.publish({ destination: "/pub/chat", body: "Message" });
//     },

//   });
//   client.activate();
//   return client;
// }

interface IChatProps {
  channelId: string;
  writerId: string;
  message: string;
}

export default function App() {
  const [chatList, setChatList] = useState<IChatProps[]>([]);
  const [chat, setChat] = useState("");
  const [id, setId] = useState("0");

  let client = useRef<CompatClient>();

  const connectHandler = () => {
    client.current = Stomp.over(() => {
      const sock = new SockJS("http://nineto6.kro.kr:8080/ws");
      return sock;
    });

    client.current.connect(
      {
        Authorization: "ghewughewghewoighiewhgiewhgoiewo",
      },
      () => {
        client.current?.subscribe(`/sub/chat/${id}`, (body) => {
          const json_body = JSON.parse(body.body);
          setChatList((_chat_list) => [..._chat_list, json_body]);
        });
      }
    );
  };

  // const disconnect = () => {
  //   client.deactivate();
  // };

  const publish = (chat: string) => {
    // const object: IChatProps = {
    //   channelId: id,
    //   writerId: id,
    //   message: chat,
    // };

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
        <h1 key={uuid()}>{JSON.stringify(value.message)}</h1>
      ))}
      <Chat />
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
