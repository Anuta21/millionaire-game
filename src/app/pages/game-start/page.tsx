import { LocalImages } from "../../components";
import { PlainButton } from "../../components/buttons";
import {
  Triangle,
  Wrapper,
  ContentContainer,
  FlexBoxContainer,
  HandContainer,
  QuestionText,
} from "./styles";

export const GameStartPage: React.FC = () => {
  return (
    <Wrapper>
      <Triangle />
      <FlexBoxContainer>
        <HandContainer src={LocalImages.hand} />
        <ContentContainer>
          <QuestionText>Who wants to be a millionaire?</QuestionText>
          <PlainButton text="Start"></PlainButton>
        </ContentContainer>
      </FlexBoxContainer>
    </Wrapper>
  );
};
