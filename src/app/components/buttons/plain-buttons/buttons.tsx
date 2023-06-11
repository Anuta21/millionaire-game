import { DesktopButton } from "../../../common";
import { IPlainButtonProps } from "./models";
import { Button } from "./styles";

export const PlainButton: React.FC<IPlainButtonProps> = ({ text }) => {
  return (
    <Button>
      <DesktopButton>{text}</DesktopButton>
    </Button>
  );
};
