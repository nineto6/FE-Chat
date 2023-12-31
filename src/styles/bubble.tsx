import styled from "styled-components";
export const SpeechBubble = styled.div`
  position: relative;
  margin: 50px;
  max-width: 50%;
  min-width: 30%;

  background: red;
  border-radius: 10px;
  ::after {
    border-top: 15px solid red;
    border-left: 15px solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 0px solid transparent;
    content: "";
    position: absolute;
    top: 10px;
    left: -14px;
  }
`;

export const OwnerBubble = styled.div`
  position: relative;
  margin: 50px;
  max-width: 50%;
  min-width: 30%;

  background: blue;
  border-radius: 10px;
  ::after {
    border-top: 15px solid blue;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 0px solid transparent;
    content: "";
    position: absolute;
    top: 10px;
    right: -15px;
  }
`;

export const BubbleContainer = styled.div<{ point: string }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) =>
    props.point == "start" ? "flex-start" : "flex-end"};
`;
