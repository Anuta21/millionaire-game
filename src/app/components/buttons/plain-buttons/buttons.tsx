import { ButtonFontText } from '../../../common';
import { IPlainButtonProps } from './models';
import { Button } from './styles';

export const PlainButton: React.FC<IPlainButtonProps> = ({ text, width = '296px', height = '64px', onClickFunc }) => {
  return (
    <Button width={width} height={height} onClick={onClickFunc}>
      <ButtonFontText>{text}</ButtonFontText>
    </Button>
  );
};
