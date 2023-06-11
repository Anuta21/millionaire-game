import styled, { css } from "styled-components";
import { Colors, DesktopButton, DesktopOption } from "../../common";
import { IButtonStyleProps } from "./models";
import { ProgressStepStates } from "./constants";

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
    background-color: ${Colors.White100};
  }

  :before {
    position: absolute;
    bottom: 50%;
    content: "";
    border-bottom: none;

    -webkit-transform: perspective(15px) rotateX(5deg);
    -moz-transform: perspective(15px) rotateX(5deg);
    transform: perspective(15px) rotateX(5deg);
    border-radius: 5px 5px 0 0;
  }

  :after {
    position: absolute;
    top: 51%;
    content: "";
    border-top: none;

    -webkit-transform: perspective(15px) rotateX(-5deg);
    -moz-transform: perspective(15px) rotateX(-5deg);
    transform: perspective(15px) rotateX(-5deg);
    border-radius: 0 0 5px 5px;
  }

  ${(props) =>
    props.state === ProgressStepStates.Current ? currentStyles : defaultStyles}
`;

export const ButtonContainer = styled.div`
  width: 166%;
  height: 100%;
  position: absolute;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  left: -33%;
  //gap: 50%;
  z-index: 1;
`;

export const LineLeft = styled.div`
  width: 18%;
  height: 0;
  border: 1px solid;
`;

export const LineRight = styled.div`
  width: 17%;
  height: 0px;
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

export const TextAnswer = styled(DesktopOption)<IButtonStyleProps>`
  color: ${(props) =>
    props.state === ProgressStepStates.Current
      ? Colors.Orange100
      : props.state === ProgressStepStates.Passed
      ? Colors.Black40
      : Colors.Black100};
`;
