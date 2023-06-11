import styled from "styled-components";
import { Colors, DesktopHeadline, DesktopQuestion } from "../../common";

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
`;

export const HandContainer = styled.img`
  width: 49%;
`;

export const ContentContainer = styled.div`
  width: 49%;
  height: 70%;

  gap: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
export const TotalScore = styled(DesktopQuestion)`
  color: ${Colors.Black100};
  margin-bottom: 8px;
  opacity: 0.5;
`;
