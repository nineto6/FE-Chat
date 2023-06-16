import { BubbleContainer, SpeechBubble } from "../styles/bubble";

interface IBubbleProps {
  text: string;
}

export default function Chat({ text }: IBubbleProps) {
  return (
    <BubbleContainer point={"start"}>
      <SpeechBubble>
        <h1>{text}</h1>
      </SpeechBubble>
    </BubbleContainer>
  );
}
