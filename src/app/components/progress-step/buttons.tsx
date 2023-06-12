import { ProgressStepStates } from './constants';
import { IProgressStepProps } from './models';
import { Step, ButtonContainer, LineLeft, LineRight, TextAnswer } from './styles';

export const ProgressStep: React.FC<IProgressStepProps> = ({ sum, state = ProgressStepStates.Blocked }) => (
  <Step state={state}>
    <ButtonContainer>
      <LineLeft />
      <TextAnswer state={state}>${sum}</TextAnswer>
      <LineRight />
    </ButtonContainer>
  </Step>
);
