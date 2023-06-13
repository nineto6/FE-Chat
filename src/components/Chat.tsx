import styled from "styled-components";

const SpeechBubble = styled.div`
  position: relative;
  margin: 50px;
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
    left: -15px;
  }
`;

const Container = styled.div`
  width: 50vw;
`;

export default function Chat() {
  return (
    <Container>
      <SpeechBubble>
        <h1>H</h1>
      </SpeechBubble>
    </Container>
  );
}
