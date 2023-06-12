import { useNavigate } from 'react-router-dom';
import { PlainButton } from '../../components';
import { Triangle, Wrapper, ContentContainer, FlexBoxContainer, HandContainer, QuestionText, ButtonContainer } from './styles';
import { Images } from '../../common';

export const GameStartPage: React.FC = () => {
  const navigate = useNavigate();

  const onStartButtonClick = () => {
    navigate('/questions');
  };

  return (
    <Wrapper>
      <Triangle />
      <FlexBoxContainer>
        <HandContainer src={Images.hand} />
        <ContentContainer>
          <QuestionText>Who wants to be a millionaire?</QuestionText>
          <ButtonContainer>
            <PlainButton text='Start' onClickFunc={onStartButtonClick} width='100%' height='100%' />
          </ButtonContainer>
        </ContentContainer>
      </FlexBoxContainer>
    </Wrapper>
  );
};
