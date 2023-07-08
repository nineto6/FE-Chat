import { styled } from "styled-components";

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

const Bubble = styled.span<{ visible: boolean }>`
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
  opacity: ${(props) => (props.visible ? 1 : 0)};
`;

interface IChatRoomProps {
  title: string;
  message: string;
  recentTime: string;
  bubble: number;
}

export default function ChatRoom({
  title,
  message,
  recentTime,
  bubble,
}: IChatRoomProps) {
  return (
    <Room>
      <RoomInfo>
        <RoomName>{title}</RoomName>
        <RecentTime>{recentTime}</RecentTime>
      </RoomInfo>
      <Message>
        <div>{message}</div>
        <Bubble visible={bubble == 0 ? false : true}>{bubble}</Bubble>
      </Message>
    </Room>
  );
}
