import { styled } from "styled-components";
import ChatRoom from "../components/ChatRoom";
import { useEffect, useState } from "react";
import { getChatRoomData } from "../api";
import { useQuery } from "react-query";
import { BiCommentAdd } from "react-icons/bi";
import AddRoomModal from "../components/AddRoomModal";

export interface IRoomListProps {
  channelId?: string;
  title: string;
  writerId: string;
  writerNm: string;
  dateTime: string;
}

const Add = styled.div`
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
`;

export default function ChatRoomList() {
  const { data, isLoading } = useQuery("chatRoomData", getChatRoomData, {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const [addRoom, setAddRoom] = useState(false);

  const addChatRoom = () => {
    setAddRoom((current) => !current);
  };

  return (
    <>
      {addRoom && <AddRoomModal setAddRoom={setAddRoom} />}
      <BiCommentAdd size={40} onClick={addChatRoom} />
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
