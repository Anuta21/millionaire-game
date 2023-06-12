import styled, { css } from 'styled-components';
import { Colors, OptionFontText } from '../../common';
import { IButtonStyleProps } from './models';
import { ProgressStepStates } from './constants';

const currentStyles = css`
  color: ${Colors.Orange100};
  :before,
  :after {
    border-color: ${Colors.Orange100};
  }
`;

const defaultStyles = css`
  color: ${Colors.Black40};
  :before,
  :after {
    border-color: ${Colors.Black40};
  }
`;

export const Step = styled.button<IButtonStyleProps>`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  position: relative;
  width: 60%;
  height: 100%;
  line-height: 100%;
  background: transparent;

  text-align: center;
  text-decoration: none;
  margin: 0 auto 0 auto;
  border: 0;

  :before,
  :after {
    width: 100%;
    left: 0px;
    height: 43%;
    border: 3px solid;
    background-color: ${Colors.White100};

    @media (min-height: 1200px) {
      border: 4px solid;
    }

    @media (min-height: 1700px) {
      border: 5px solid;
    }

    @media (min-height: 2000px) {
      border: 7px solid;
    }
  }

  :before {
    position: absolute;
    bottom: 49%;
    content: '';
    border-bottom: none;

    -webkit-transform: perspective(15px) rotateX(5deg);
    -moz-transform: perspective(15px) rotateX(5deg);
    transform: perspective(15px) rotateX(5deg);
    border-radius: 5px 5px 0 0;

    @media (min-height: 1100px) {
      -webkit-transform: perspective(15px) rotateX(3deg);
      -moz-transform: perspective(15px) rotateX(3deg);
      transform: perspective(15px) rotateX(3deg);
    }
  }

  :after {
    position: absolute;
    top: 50%;
    content: '';
    border-top: none;

    -webkit-transform: perspective(15px) rotateX(-5deg);
    -moz-transform: perspective(15px) rotateX(-5deg);
    transform: perspective(15px) rotateX(-5deg);
    border-radius: 0 0 5px 5px;

    @media (min-height: 1100px) {
      -webkit-transform: perspective(15px) rotateX(-3deg);
      -moz-transform: perspective(15px) rotateX(-3deg);
      transform: perspective(15px) rotateX(-3deg);
    }
  }

  ${(props) => (props.state === ProgressStepStates.Current ? currentStyles : defaultStyles)}
`;

export const ButtonContainer = styled.div`
  width: 166%;
  height: 100%;
  position: absolute;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  left: -33.5%;
`;

export const LineLeft = styled.div`
  width: 19%;
  height: 0;
  border: 1px solid;

  @media (min-height: 1200px) {
    border: 2px solid;
  }

  @media (min-height: 1700px) {
    border: 3px solid;
  }
`;

export const LineRight = styled.div`
  width: 18%;
  height: 0px;
  border: 1px solid;

  @media (min-height: 1200px) {
    border: 2px solid;
  }

  @media (min-height: 1700px) {
    border: 3px solid;
  }
`;

export const ContentContainer = styled.div`
  margin-left: 16px;
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;

  gap: 8px;
  z-index: 1;
`;

export const TextAnswer = styled(OptionFontText)<IButtonStyleProps>`
  z-index: 1;
  color: ${(props) => (props.state === ProgressStepStates.Current ? Colors.Orange100 : props.state === ProgressStepStates.Passed ? Colors.Black40 : Colors.Black100)};
`;
