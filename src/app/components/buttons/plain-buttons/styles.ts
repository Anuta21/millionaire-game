import styled from 'styled-components';
import { Colors } from '../../../common';
import { IButtonStyles } from './models';

export const Button = styled.button<IButtonStyles>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};

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
