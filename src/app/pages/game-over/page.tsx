import { useLocation, useNavigate } from 'react-router-dom';
import { Images, HeadlineFontText } from '../../common';
import { Wrapper, ContentContainer, FlexBoxContainer, HandContainer, TotalScore, ButtonContainer, TextContainer } from './styles';
import { IGameOverPageLocationState } from './models';
import { PlainButton } from '../../components';

export const GameOverPage: React.FC = () => {
  const locationState = useLocation().state as IGameOverPageLocationState;
  const navigate = useNavigate();

  const onTryAgainButtonClick = () => {
    navigate('/questions');
  };

  return (
    <Wrapper>
      <FlexBoxContainer>
        <HandContainer src={Images.hand} />
        <ContentContainer>
          <TextContainer>
            <TotalScore>Total score:</TotalScore>
            <HeadlineFontText>${locationState?.prize || 0} earned</HeadlineFontText>
          </TextContainer>
          <ButtonContainer>
            <PlainButton text='Try again' onClickFunc={onTryAgainButtonClick} width='100%' height='100%' />
          </ButtonContainer>
        </ContentContainer>
      </FlexBoxContainer>
    </Wrapper>
  );
};
