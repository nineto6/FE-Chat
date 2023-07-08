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

export default function ChatRoom() {
  return (
    <Room>
      <RoomInfo>
        <RoomName>23학번</RoomName>
        <RecentTime>오후 5:34</RecentTime>
      </RoomInfo>
      <Message>
        <div>안녕</div>
        <Bubble>300</Bubble>
      </Message>
    </Room>
  );
}
