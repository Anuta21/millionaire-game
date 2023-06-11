import { OptionButtonStates } from "./constants";
import { IOptionButtonProps } from "./models";
import {
  Button,
  ButtonContainer,
  ContentContainer,
  LineLeft,
  LineRight,
  OptionLetter,
  TextAnswer,
} from "./styles";

export const OptionButton: React.FC<IOptionButtonProps> = ({
  id = 1,
  text,
  optionLetter,
  state = OptionButtonStates.Default,
  onClickFunc,
}) => {
  return (
    <Button state={state} onClick={() => onClickFunc?.(id)}>
      <LineLeft />
      <ContentContainer>
        <OptionLetter>{optionLetter}</OptionLetter>
        <TextAnswer>{text}</TextAnswer>
      </ContentContainer>
      <LineRight />
    </Button>
  );
};
