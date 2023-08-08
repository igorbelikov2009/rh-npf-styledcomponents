import React, { FC } from "react";
import { HidingArchiveProps } from "../../../../interfaces/types";
import DarkIcon from "../../../areCommon/icons/DarkIcon";
import ArchiveShareholders from "../ArchiveShareholders";
import ArchivePension from "../ArchivePension";
import ArchiveReporting from "../ArchiveReporting";
import ArchiveAssetValueRules from "../ArchiveAssetValueRules";
import { Background, Container, Heading, IconContainer, StyledHidingArhive, TopBlock, Wrapper } from "./styles";

const HidingArchive: FC<HidingArchiveProps> = ({
  isArchiveAssetValueRulesVisible,
  isArchivePensionVisible,
  isArchiveReportingVisible,
  isArchiveShareholdersVisible,
  isVisible,
  onClickHidingArchive,
}) => {
  return (
    <StyledHidingArhive visible={isVisible}>
      <Background visible={isVisible}></Background>

      <Container visible={isVisible}>
        <Wrapper>
          <>
            {isArchiveShareholdersVisible && <ArchiveShareholders />}

            {isArchivePensionVisible && <ArchivePension />}

            {isArchiveReportingVisible && <ArchiveReporting />}

            {isArchiveAssetValueRulesVisible && <ArchiveAssetValueRules />}
          </>

          <TopBlock visible={isVisible}>
            <Heading>Архив</Heading>

            <IconContainer onClick={onClickHidingArchive}>
              <DarkIcon icon="Cross" />
            </IconContainer>
          </TopBlock>
        </Wrapper>
      </Container>
    </StyledHidingArhive>
  );
};

export default HidingArchive;
