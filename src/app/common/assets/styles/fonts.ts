import styled from 'styled-components';

// base config
const font = styled.div`
  font-family: 'Inter';
  font-style: normal;
  line-height: 116%;
`;

const Regular = styled(font)`
  font-weight: 400;
`;

const SemiBold = styled(font)`
  font-weight: 600;
`;

export const ButtonFontText = styled(SemiBold)`
  font-size: 20px;

  @media (max-width: 640px) {
    font-size: 14px;
  }

  @media (min-height: 1100px) {
    font-size: 36px;
  }

  @media (min-height: 1300px) {
    font-size: 44px;
  }

  @media (min-height: 1500px) {
    font-size: 50px;
  }

  @media (min-height: 1700px) {
    font-size: 56px;
  }
`;

export const QuestionFontText = styled(SemiBold)`
  font-size: 32px;

  @media (min-width: 1600px) {
    font-size: 56px;
  }

  @media (min-width: 2200px) {
    font-size: 66px;
  }

  @media (min-width: 2800px) {
    font-size: 86px;
  }

  @media (min-width: 3500px) {
    font-size: 96px;
  }

  @media (min-width: 4000px) {
    font-size: 106px;
  }

  @media (max-width: 1064px) {
    font-size: 36px;
  }

  @media (max-width: 864px) {
    font-size: 26px;
  }

  @media (max-width: 640px) {
    font-size: 18px;
  }
`;

export const OptionFontText = styled(Regular)`
  font-size: 20px;

  @media (max-width: 640px) {
    font-size: 16px;
  }

  @media (min-height: 1100px) {
    font-size: 26px;
  }

  @media (min-height: 1300px) {
    font-size: 34px;
  }

  @media (min-height: 1500px) {
    font-size: 46px;
  }

  @media (min-height: 1700px) {
    font-size: 50px;
  }
`;

export const HeadlineFontText = styled(SemiBold)`
  font-size: 56px;

  @media (min-width: 1600px) {
    font-size: 66px;
  }

  @media (min-width: 2200px) {
    font-size: 76px;
  }

  @media (min-width: 2800px) {
    font-size: 96px;
  }

  @media (min-width: 3500px) {
    font-size: 106px;
  }

  @media (min-width: 4000px) {
    font-size: 126px;
  }

  @media (max-width: 1064px) {
    font-size: 46px;
  }

  @media (max-width: 864px) {
    font-size: 36px;
  }

  @media (max-width: 640px) {
    font-size: 32px;
  }
`;
