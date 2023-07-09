import { styled } from "styled-components";

const Backgound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  position: absolute;
  top: 0%;
  left: 0%;

  background-color: black;
  opacity: 0.5;
`;

export default function AddRoomModal({ setAddRoom }: any) {
  const closeModal = () => {
    setAddRoom(false);
  };

  return (
    <>
      <Backgound onClick={closeModal} />
    </>
  );
}
