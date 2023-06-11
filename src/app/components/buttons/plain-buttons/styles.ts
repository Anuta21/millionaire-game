import styled from "styled-components";
import { Colors } from "../../../common";

export const Button = styled.button`
  height: 64px;
  width: 296px;

  background: ${Colors.Orange100};
  border-radius: 12px;
  border: transparent;
  color: ${Colors.White100};
  cursor: pointer;

  :hover {
    background: ${Colors.Orange80};
  }

  :active {
    background: ${Colors.Orange120};
  }
`;
