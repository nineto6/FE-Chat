import { styled } from "styled-components";
import ChatRoom from "../components/ChatRoom";
import { useEffect } from "react";
import { getChatRoomData } from "../api";
import { useQuery } from "react-query";

const db = [
  {
    roomId: 1,
    title: "23학번",
    message: "반갑습니다",
    recentTime: "오후 5:33",
    bubble: 1,
  },
  {
    roomId: 2,
    title: "모임",
    message: "어서오세요",
    recentTime: "07/28",
    bubble: 300,
  },
  {
    roomId: 3,
    title: "차민혁",
    message: "어서오고",
    recentTime: "07/28",
    bubble: 5,
  },
];

export interface IRoomListProps {
  channelId?: string;
  title: string;
  writerId: string;
  writerNm: string;
  dateTime: string;
}

export default function ChatRoomList() {
  const { data, isLoading } = useQuery("chatRoomData", getChatRoomData, {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  // const getData = async () => {
  //   console.log(data);
  // };

  return (
    <>
      {data?.data?.result?.map((roomList: IRoomListProps) => (
        <ChatRoom
          key={roomList.channelId}
          title={roomList.title}
          writerNm={roomList.writerNm}
          dateTime={roomList.dateTime}
          writerId={roomList.writerId}
        />
      ))}
    </>
  );
}
