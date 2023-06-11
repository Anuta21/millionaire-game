import { ProgressStepStates } from "./constants";
import { IProgressStepProps } from "./models";
import {
  Step,
  ButtonContainer,
  LineLeft,
  LineRight,
  TextAnswer,
} from "./styles";

export const ProgressStep: React.FC<IProgressStepProps> = ({
  sum,
  width,
  height,
  state = ProgressStepStates.Blocked,
}) => {
  return (
    <Step state={state}>
      <ButtonContainer>
        <LineLeft />
        <TextAnswer state={state}>${sum}</TextAnswer>
        <LineRight />
      </ButtonContainer>
    </Step>
  );
};
