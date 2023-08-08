import React, { FC } from "react";
import ButtonToArchive from "../../ui/buttons/ButtonToArchive/ButtonToArchive";
import { ButtonContainer, Container, Heading, Link, StyledAssetValueRules, Wrapper } from "./styles";

interface AssetValueRulesProps {
  onClickArchiveAssetValueRules: () => void;
}

const AssetValueRules: FC<AssetValueRulesProps> = ({ onClickArchiveAssetValueRules }) => {
  return (
    <StyledAssetValueRules>
      <Container>
        <Wrapper>
          <Heading>Правила определения стоимости чистых активов</Heading>

          <Link
            target="_blank"
            href="/pdf/infoOpening/asset-value-rules/Порядок определения стоимости чистых активов  НПФ РП-1577256574330.pdf"
          >
            Порядок определения стоимости чистых активов АО НПФ «Ренессанс пенсии» (опубликовано: 23.12.2019)
          </Link>

          <ButtonContainer onClick={onClickArchiveAssetValueRules}>
            <ButtonToArchive />
          </ButtonContainer>
        </Wrapper>
      </Container>
    </StyledAssetValueRules>
  );
};

export default AssetValueRules;
