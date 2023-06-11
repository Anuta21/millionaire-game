import { useLocation } from "react-router-dom";
import { DesktopHeadline } from "../../common";
import { LocalImages } from "../../components";
import { PlainButton } from "../../components/buttons";
import {
  Wrapper,
  ContentContainer,
  FlexBoxContainer,
  HandContainer,
  TotalScore,
} from "./styles";
import { IGameOverPageLocationState } from "./models";

export const GameOverPage: React.FC = () => {
  const locationState = useLocation().state as IGameOverPageLocationState;

  return (
    <Wrapper>
      <FlexBoxContainer>
        <HandContainer src={LocalImages.hand} />
        <ContentContainer>
          <div>
            <TotalScore>Total score:</TotalScore>
            <DesktopHeadline>${locationState.prize} earned</DesktopHeadline>
          </div>
          <PlainButton text="Try again"></PlainButton>
        </ContentContainer>
      </FlexBoxContainer>
    </Wrapper>
  );
};
