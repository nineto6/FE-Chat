import { styled } from "styled-components";
import ChatRoom from "../components/ChatRoom";

const db = [
  {
    title: "23학번",
    message: "반갑습니다",
    recentTime: "오후 5:33",
    bubble: 1,
  },
  {
    title: "모임",
    message: "어서오세요",
    recentTime: "07/28",
    bubble: 300,
  },
  {
    title: "차민혁",
    message: "어서오고",
    recentTime: "07/28",
    bubble: 5,
  },
];

export default function ChatRoomList() {
  return (
    <>
      <div>
        {db.map((list) => (
          <ChatRoom
            title={list.title}
            message={list.message}
            recentTime={list.recentTime}
            bubble={list.bubble}
          />
        ))}
      </div>
    </>
  );
}
