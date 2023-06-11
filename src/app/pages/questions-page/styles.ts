import styled from "styled-components";
import { Colors, DesktopQuestion } from "../../common";
import { IShowSidebar } from "./models";

export const Wrapper = styled.div<IShowSidebar>`
  position: relative;
  width: 100%;
  height: 100vh;

  display: grid;
  background: ${Colors.Black5};

  @media (min-width: 1064px) {
    grid-template-columns: [start] 74% [middle] 26% [end];
  }

  @media (max-width: 1064px) {
    grid-template-columns: [start] 70% [middle] 30% [end];
  }

  @media (max-width: 864px) {
    grid-template-columns: [start] 60% [middle] 40% [end];
  }

  @media (max-width: 640px) {
    grid-template-columns: ${(props) =>
      props.showSidebar
        ? "[start] 0% [middle] 100% [end]"
        : "[start] 100% [middle] 0% [end]"};
  }
`;

export const BurgerMenuIcon = styled.div`
  display: flex;
  //align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
  top: 20px;
  cursor: pointer;
  width: 95%;
  height: 20px;

  @media (min-width: 640px) {
    display: none;
  }
`;

export const CurrentQuestionContainer = styled.div<IShowSidebar>`
  //position: relative;
  grid-column-start: start;
  grid-column-end: middle;
  max-height: 100vh;

  @media (max-width: 640px) {
    display: ${(props) => (props.showSidebar ? "none" : "default")};
  }
`;

export const CurrentQuestionContentContainer = styled.div`
  display: flex;
  //align-items: center;
  flex-direction: column;
  justify-content: space-between;

  position: absolute;
  left: 8%;
  top: 15%;
  height: 70%;
  width: 60%;

  @media (max-width: 1064px) {
    width: 50%;
  }

  @media (max-width: 864px) {
    width: 40%;
  }

  @media (max-width: 640px) {
    width: 100%;
    left: 0;

    height: auto;
    bottom: 24px;
    top: 136px;
  }
`;

export const QuestionText = styled(DesktopQuestion)``;

export const Options = styled.div`
  display: flex;
  //align-items: center;
  align-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  //position: relative;
  bottom: 0;
  left: 0;
  //gap: 32px;
  width: 100%;
  height: 176px;

  @media (max-width: 1064px) {
    height: 384px;
  }

  @media (max-width: 640px) {
    height: 248px;
  }
`;

export const CrossIcon = styled.img`
  position: relative;
  top: 20px;
  right: 20px;
  cursor: pointer;

  @media (min-width: 640px) {
    display: none;
  }
`;

export const ProgressContainer = styled.div<IShowSidebar>`
  grid-column-start: middle;
  grid-column-end: end;
  max-height: 100vh;

  background: ${Colors.White100};
  @media (max-width: 640px) {
    background: ${Colors.Black5};
    display: ${(props) => (props.showSidebar ? "default" : "none")};
  }
`;

export const OptionsInlineContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  width: 59%;
  height: 72px;
`;

export const OptionButtonContainer = styled.div`
  width: 50%;
  height: 72px;

  @media (max-width: 1064px) {
    width: 100%;
  }

  @media (max-width: 1064px) {
    height: 56px;
  }
`;

export const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
  top: 18.5%;
  height: 63%;
  width: 100%;
  gap: 8px;
`;

export const StepContainer = styled.div`
  width: 100%;
  height: 7%;
`;
