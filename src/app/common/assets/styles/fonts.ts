import styled from "styled-components";

// base config
const font = styled.div`
  font-family: "Inter";
  font-style: normal;
  line-height: 116%;
`;

export const Regular = styled(font)`
  font-weight: 400;
`;

export const SemiBold = styled(font)`
  font-weight: 600;
`;

// Mobile

export const MobileButton = styled(SemiBold)`
  font-size: 14px;
`;

export const MobileQuestion = styled(SemiBold)`
  font-size: 18px;
`;

export const MobileOption = styled(Regular)`
  font-size: 16px;
`;

export const MobileHeadline = styled(SemiBold)`
  font-size: 32px;
`;

// Desktop

export const DesktopButton = styled(SemiBold)`
  font-size: 20px;
`;

export const DesktopQuestion = styled(SemiBold)`
  font-size: 32px;
`;

export const DesktopOption = styled(Regular)`
  font-size: 20px;
`;

export const DesktopHeadline = styled(SemiBold)`
  font-size: 56px;
`;
