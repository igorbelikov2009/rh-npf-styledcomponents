import React, { FC } from "react";
import DarkIcon from "../../icons/DarkIcon";
import { ExpandingPanelProps, IconContainer, IconPlus, MinusPlus, PanelTitle, StyledExpandingPanel } from "./styles";

const ExpandingPanel: FC<ExpandingPanelProps> = ({ visible, panelName, onClickExpanding }) => {
  return (
    <StyledExpandingPanel onClick={onClickExpanding}>
      <PanelTitle> {panelName} </PanelTitle>

      <IconContainer>
        <IconPlus visible={visible}>
          <DarkIcon isDecreased icon="Plus Thin" />
        </IconPlus>

        <MinusPlus visible={visible}>
          <DarkIcon isDecreased={true} icon="Minus Thin" />
        </MinusPlus>
      </IconContainer>
    </StyledExpandingPanel>
  );
};

export default ExpandingPanel;
