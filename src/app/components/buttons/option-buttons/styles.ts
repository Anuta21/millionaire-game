import styled, { css } from "styled-components";
import { Colors, DesktopButton, DesktopOption } from "../../../common";
import { IButtonStyleProps } from "./models";
import { OptionButtonStates } from "./constants";

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
  font-size: 15px;
  text-decoration: none;
  margin: 0 auto 0 auto;
  border: 0;
  cursor: pointer;

  :before,
  :after {
    width: 100%;
    left: 0px;
    height: 43%;
    border: 3px solid;
  }

  :before {
    position: absolute;
    bottom: 51%;
    content: "";
    border-bottom: none;

    -webkit-transform: perspective(15px) rotateX(5deg);
    -moz-transform: perspective(15px) rotateX(5deg);
    transform: perspective(15px) rotateX(5deg);
    border-radius: 5px 5px 0 0;
  }

  :after {
    position: absolute;
    top: 52%;
    content: "";
    border-top: none;

    -webkit-transform: perspective(15px) rotateX(-5deg);
    -moz-transform: perspective(15px) rotateX(-5deg);
    transform: perspective(15px) rotateX(-5deg);
    border-radius: 0 0 5px 5px;
  }

  ${(props) =>
    props.state === OptionButtonStates.Correct
      ? correctStyles
      : props.state === OptionButtonStates.Wrong
      ? wrongStyles
      : defaultStyles}
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const LineLeft = styled.div`
  position: absolute;
  width: 5%;
  height: 0;
  top: 50%;
  left: -11%;

  border: 1px solid;
`;

export const LineRight = styled.div`
  position: absolute;
  width: 5%;
  height: 0px;
  right: -11%;
  top: 50%;

  border: 1px solid;
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

export const OptionLetter = styled(DesktopButton)`
  color: ${Colors.Orange100};
`;

export const TextAnswer = styled(DesktopOption)`
  color: ${Colors.Black100};
`;
