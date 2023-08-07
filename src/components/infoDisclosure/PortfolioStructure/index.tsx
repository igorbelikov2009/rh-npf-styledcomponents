import React from "react";
import { Container, Link, Paragraph, StructureLink, StyledPortfolioStructure } from "./styles";

const PortfolioStructure = () => {
  return (
    <StyledPortfolioStructure>
      <Container>
        <Paragraph>
          <Link href="/investment#portfolioStructure">Структура инвестиционного портфеля Фонда</Link>
        </Paragraph>

        <Paragraph>
          <StructureLink
            target="_blank"
            href="/pdf/infoOpening/portfolio-structure/02 Информация о процессе размещения средств ПР_10.02-1581662050140.pdf"
          >
            Информация о процессе размещения средств пенсионных резервов (PDF)
          </StructureLink>
        </Paragraph>

        <Paragraph>
          <StructureLink
            target="_blank"
            href="/pdf/infoOpening/portfolio-structure/03 Сведения об органах и должностных лицах_01.07.2021-1625146217407.pdf"
          >
            Сведения об органах управления, членах совета директоров Фонда, должностных лицах и работниках Фонда (PDF)
          </StructureLink>
        </Paragraph>

        <Paragraph>
          <br />
        </Paragraph>

        <Paragraph>
          АО НПФ «Ренессанс пенсии» во всех отчетных периодах деятельность по обязательному пенсионному страхованию не
          осуществлял.
        </Paragraph>
      </Container>
    </StyledPortfolioStructure>
  );
};

export default PortfolioStructure;
