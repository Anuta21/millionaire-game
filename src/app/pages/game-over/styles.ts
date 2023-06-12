import styled from 'styled-components';
import { Colors, QuestionFontText } from '../../common';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${Colors.White100};
`;

export const FlexBoxContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  position: absolute;
  left: 5%;
  top: 25%;
  gap: 2%;
  width: 89%;
  height: 40%;

  @media (max-width: 640px) {
    flex-direction: column;
    justify-content: space-between;
    top: 12%;
    height: auto;
    bottom: 48px;
    gap: 48px;
  }

  @media (min-height: 600px) {
    top: 15%;
    height: 70%;
  }
`;

export const HandContainer = styled.img`
  width: 49%;

  @media (max-width: 480px) {
    width: 90%;
  }

  @media (min-width: 480px) and (max-width: 640px) {
    width: 70%;
  }
`;

export const ContentContainer = styled.div`
  width: 49%;
  height: 238px;

  gap: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 640px) {
    width: 90%;
    align-items: center;
  }

  @media (min-height: 600px) {
    height: 50%;
  }
`;

export const TotalScore = styled(QuestionFontText)`
  color: ${Colors.Black100};
  margin-bottom: 8px;
  opacity: 0.5;

  @media (max-width: 640px) {
    text-align: center;
  }
`;

export const ButtonContainer = styled.div`
  width: 47%;
  height: 64px;

  @media (max-width: 640px) {
    height: 48px;
    width: 100%;
  }

  @media (min-height: 1100px) {
    height: 80px;
  }

  @media (min-height: 1300px) {
    height: 96px;
  }

  @media (min-height: 1500px) {
    height: 112px;
  }

  @media (min-height: 1700px) {
    height: 128px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
