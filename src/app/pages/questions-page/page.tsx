import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux';
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
  BurgerMenuIcon
} from './styles';
import { LocalImages } from './images';
import { OptionButton, OptionButtonStates, ProgressStep, ProgressStepStates } from '../../components';
import { optionsLetters } from './constants';

export const QuestionsPage: React.FC = () => {
  const { questionSteps, stepsNumber } = useAppSelector((state) => state.gamePageReducer);

  const navigate = useNavigate();

  const [currentStepNumber, setCurrentStepNumber] = useState(0);
  const [optionButonnsStates, setOptionButtonsStates] = useState([OptionButtonStates.Default, OptionButtonStates.Default, OptionButtonStates.Default, OptionButtonStates.Default]);
  const [showSidebar, setShowSidebar] = useState(false);

  const stepState = (id: number) => {
    if (id === questionSteps[currentStepNumber].id) return ProgressStepStates.Current;
    if (id > questionSteps[currentStepNumber].id) return ProgressStepStates.Blocked;
    return ProgressStepStates.Passed;
  };

  const onOptionClick = (id: number) => {
    const cickedAnswer = questionSteps[currentStepNumber].answers.find((answer) => answer.id === id);

    // correct answer
    if (cickedAnswer?.isCorrect) {
      setOptionButtonsStates((state) => ({ ...state, [id - 1]: OptionButtonStates.Correct }));

      // last question
      if (questionSteps[currentStepNumber].id === stepsNumber) {
        setTimeout(() => navigate('/end', { state: { prize: questionSteps[currentStepNumber].prize } }), 3000);
      } else {
        // there are more questions left
        setTimeout(() => {
          setOptionButtonsStates((state) => ({ ...state, [id - 1]: OptionButtonStates.Default }));
          setCurrentStepNumber(currentStepNumber + 1);
        }, 3000);
      }
    } else {
      // wrong answer
      setOptionButtonsStates((state) => ({ ...state, [id - 1]: OptionButtonStates.Wrong }));
      setTimeout(() => navigate('/end', { state: { prize: currentStepNumber ? questionSteps[currentStepNumber - 1].prize : '0' } }), 3000);
    }
  };

  return (
    <Wrapper showSidebar={showSidebar}>
      <CurrentQuestionContainer showSidebar={showSidebar}>
        <BurgerMenuIcon>
          <img src={LocalImages.burgerMenuIcon} onClick={() => setShowSidebar(true)} />
        </BurgerMenuIcon>
        <CurrentQuestionContentContainer>
          <QuestionText>{questionSteps[currentStepNumber].question}</QuestionText>

          <Options>
            {questionSteps[currentStepNumber].answers.map((answer) => (
              <OptionButtonContainer key={answer.id}>
                <OptionButton
                  id={answer.id}
                  optionLetter={optionsLetters[answer.id - 1]}
                  state={optionButonnsStates[answer.id - 1]}
                  text={answer.answer}
                  onClickFunc={onOptionClick}
                />
              </OptionButtonContainer>
            ))}
          </Options>
        </CurrentQuestionContentContainer>
      </CurrentQuestionContainer>

      <ProgressContainer showSidebar={showSidebar}>
        <BurgerMenuIcon>
          <img src={LocalImages.crossIcon} onClick={() => setShowSidebar(false)} />
        </BurgerMenuIcon>

        <StepsContainer>
          {questionSteps
            .map((questionStep) => (
              <StepContainer key={questionStep.id}>
                <ProgressStep sum={questionStep.prize} state={stepState(questionStep.id)} />
              </StepContainer>
            ))
            .reverse()}
        </StepsContainer>
      </ProgressContainer>
    </Wrapper>
  );
};
