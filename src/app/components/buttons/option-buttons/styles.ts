import styled, { css } from 'styled-components';
import { Colors, ButtonFontText, OptionFontText } from '../../../common';
import { IButtonStyleProps } from './models';
import { OptionButtonStates } from './constants';

const correctStyles = css<IButtonStyleProps>`
  color: ${Colors.Green100};
  :before,
  :after {
    background-color: ${Colors.Green5};
    border-color: ${Colors.Green100};
  }
`;

const wrongStyles = css<IButtonStyleProps>`
  color: ${Colors.Red100};
  :before,
  :after {
    background-color: ${Colors.Red5};
    border-color: ${Colors.Red100};
  }
`;

const defaultStyles = css<IButtonStyleProps>`
  :hover {
    color: ${Colors.Orange100};
  }
  color: ${Colors.Black40};

  :before,
  :after {
    border-color: ${Colors.Black40};
    background-color: ${Colors.White100};
  }
  :hover:before,
  :hover:after {
    border-color: ${Colors.Orange100};
  }

  :active:before,
  :active:after {
    background-color: ${Colors.Orange5};
  }
`;

export const Button = styled.button<IButtonStyleProps>`
  position: relative;
  display: block;
  width: 82%;
  height: 100%;
  line-height: 100%;
  background: transparent;

  text-align: center;
  text-decoration: none;
  margin: 0 auto 0 auto;
  border: 0;
  cursor: pointer;

  :before,
  :after {
    width: 98%;
    left: 0px;
    height: 43%;
    border: 3px solid;

    @media (min-height: 1200px) {
      width: 100%;
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
    bottom: 50%;
    content: '';
    border-bottom: none;

    -webkit-transform: perspective(15px) rotateX(5deg);
    -moz-transform: perspective(15px) rotateX(5deg);
    transform: perspective(15px) rotateX(5deg);
    border-radius: 5px 5px 0 0;

    @media (min-height: 1200px) {
      bottom: 48%;

      -webkit-transform: perspective(55px) rotateX(3deg);
      -moz-transform: perspective(55px) rotateX(3deg);
      transform: perspective(55px) rotateX(3deg);

      border-radius: 8px 8px 0 0;
    }
  }

  :after {
    position: absolute;
    top: 52%;
    content: '';
    border-top: none;

    -webkit-transform: perspective(15px) rotateX(-5deg);
    -moz-transform: perspective(15px) rotateX(-5deg);
    transform: perspective(15px) rotateX(-5deg);
    border-radius: 0 0 5px 5px;

    @media (min-height: 1200px) {
      top: 51%;

      -webkit-transform: perspective(55px) rotateX(-3deg);
      -moz-transform: perspective(55px) rotateX(-3deg);
      transform: perspective(55px) rotateX(-3deg);

      border-radius: 0 0 8px 8px;
    }
  }

  ${(props) => (props.state === OptionButtonStates.Correct ? correctStyles : props.state === OptionButtonStates.Wrong ? wrongStyles : defaultStyles)}
`;

export const LineLeft = styled.div`
  position: absolute;
  width: 8%;
  height: 0;
  top: 50%;
  left: -11%;

  border: 1px solid;

  @media (min-height: 1200px) {
    width: 10%;
    left: -11%;
    border: 2px solid;
  }

  @media (min-height: 1700px) {
    border: 3px solid;
  }
`;

export const LineRight = styled.div`
  position: absolute;
  width: 8%;
  height: 0px;
  right: -11%;
  top: 50%;

  border: 1px solid;

  @media (min-height: 1200px) {
    width: 10%;
    right: -11%;
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

  @media (min-height: 1100px) {
    margin-left: 56px;
    gap: 38px;
  }
`;

export const OptionLetter = styled(ButtonFontText)`
  color: ${Colors.Orange100};
`;

export const TextAnswer = styled(OptionFontText)`
  color: ${Colors.Black100};
`;
