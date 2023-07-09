import { styled } from "styled-components";
import { IRoomListProps } from "../pages/ChatRoomList";

const Room = styled.div`
  width: 500px;
  height: 64px;
  background-color: #e7e7bb;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 10px 15px;
  margin-top: 15px;

  border-radius: 15px;
`;

const RoomInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RoomName = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const RecentTime = styled.div``;

const Message = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Bubble = styled.span`
  background-color: red;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;

  min-width: 24px;
  width: auto;
  height: 24px;

  border-radius: 18px;
`;

// interface IChatRoomProps {
//   title: string;
//   message: string;
//   recentTime: string;
//   bubble: number;
// }

export default function ChatRoom({
  title,
  writerId,
  writerNm,
  dateTime,
}: IRoomListProps) {
  return (
    <Room>
      <RoomInfo>
        <RoomName>{title}</RoomName>
        <RecentTime>{dateTime.slice(0, 10)}</RecentTime>
      </RoomInfo>
      <Message>
        <div>{writerId}</div>
        <Bubble>{writerNm}</Bubble>
      </Message>
    </Room>
  );
}
