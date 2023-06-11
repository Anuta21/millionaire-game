import { useEffect, useState } from "react";
import { OptionButton } from "../../components/buttons";
import { ProgressStep } from "../../components/progress-step/buttons";
import { useAppSelector } from "../../redux";
import {
  CurrentQuestionContainer,
  ProgressContainer,
  Wrapper,
  CurrentQuestionContentContainer,
  QuestionText,
  OptionButtonContainer,
  Options,
  StepsContainer,
  StepContainer,
  BurgerMenuIcon,
  CrossIcon,
} from "./styles";
import { ProgressStepStates } from "../../components/progress-step/constants";
import { useNavigate } from "react-router-dom";
import { OptionButtonStates } from "../../components/buttons/option-buttons/constants";
import { LocalImages } from "./images";

export const QuestionsPage: React.FC = () => {
  const { questionSteps, stepsNumber } = useAppSelector(
    (state) => state.gamePageReducer
  );

  const navigate = useNavigate();

  const [currentStepNumber, setCurrentStepNumber] = useState(0);
  const [optionButonnsStates, setOptionButtonsStates] = useState({
    1: OptionButtonStates.Default,
    2: OptionButtonStates.Default,
    3: OptionButtonStates.Default,
    4: OptionButtonStates.Default,
  });
  const [showSidebar, setShowSidebar] = useState(false);

  const stepState = (id: number) => {
    if (id === questionSteps[currentStepNumber].id)
      return ProgressStepStates.Current;
    else if (id > questionSteps[currentStepNumber].id)
      return ProgressStepStates.Blocked;
    return ProgressStepStates.Passed;
  };

  const onOptionClick = (id: number) => {
    const cickedAnswer = questionSteps[currentStepNumber].answers.find(
      (answer) => answer.id === id
    );

    if (cickedAnswer?.isCorrect) {
      setOptionButtonsStates((state) => ({
        ...state,
        [id]: OptionButtonStates.Correct,
      }));
      console.log(optionButonnsStates);

      if (questionSteps[currentStepNumber].id === stepsNumber) {
        setTimeout(
          () =>
            navigate("/end", {
              state: { prize: questionSteps[currentStepNumber].prize },
            }),
          3000
        );
      } else {
        setTimeout(() => {
          setOptionButtonsStates((state) => ({
            ...state,
            [id]: OptionButtonStates.Default,
          }));
          setCurrentStepNumber(currentStepNumber + 1);
        }, 3000);
      }
    } else {
      setOptionButtonsStates((state) => ({
        ...state,
        [id]: OptionButtonStates.Wrong,
      }));

      setTimeout(
        () =>
          navigate("/end", {
            state: {
              prize: currentStepNumber
                ? questionSteps[currentStepNumber - 1].prize
                : "0",
            },
          }),
        3000
      );
    }
  };

  useEffect(() => {}, [currentStepNumber]);

  return (
    <Wrapper showSidebar={showSidebar}>
      <CurrentQuestionContainer showSidebar={showSidebar}>
        <BurgerMenuIcon>
          <img
            src={LocalImages.burgerMenuIcon}
            onClick={() => setShowSidebar(true)}
          />
        </BurgerMenuIcon>
        <CurrentQuestionContentContainer>
          <QuestionText>
            {questionSteps[currentStepNumber].question}
          </QuestionText>

          <Options>
            <OptionButtonContainer>
              <OptionButton
                id={1}
                optionLetter="A"
                state={optionButonnsStates[1]}
                text={questionSteps[currentStepNumber].answers[0].answer}
                onClickFunc={onOptionClick}
              />
            </OptionButtonContainer>

            <OptionButtonContainer>
              <OptionButton
                id={2}
                optionLetter="B"
                state={optionButonnsStates[2]}
                text={questionSteps[currentStepNumber].answers[1].answer}
                onClickFunc={onOptionClick}
              />
            </OptionButtonContainer>

            <OptionButtonContainer>
              <OptionButton
                id={3}
                optionLetter="C"
                state={optionButonnsStates[3]}
                text={questionSteps[currentStepNumber].answers[2].answer}
                onClickFunc={onOptionClick}
              />
            </OptionButtonContainer>

            <OptionButtonContainer>
              <OptionButton
                id={4}
                optionLetter="D"
                state={optionButonnsStates[4]}
                text={questionSteps[currentStepNumber].answers[3].answer}
                onClickFunc={onOptionClick}
              />
            </OptionButtonContainer>
          </Options>
        </CurrentQuestionContentContainer>
      </CurrentQuestionContainer>

      <ProgressContainer showSidebar={showSidebar}>
        <BurgerMenuIcon>
          <img
            src={LocalImages.crossIcon}
            onClick={() => setShowSidebar(false)}
          />
        </BurgerMenuIcon>

        <StepsContainer>
          {questionSteps
            .map((questionStep) => (
              <StepContainer>
                <ProgressStep
                  width="100%"
                  height="8%"
                  sum={questionStep.prize}
                  state={stepState(questionStep.id)}
                />
              </StepContainer>
            ))
            .reverse()}
        </StepsContainer>
      </ProgressContainer>
    </Wrapper>
  );
};
