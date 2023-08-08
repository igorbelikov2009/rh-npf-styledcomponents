import React from "react";
import ArchiveLink from "../../ui/links/ArchiveLink";
import { ArchiveLinkProps } from "../../../interfaces/types";
import { Container, Content, Heading, StyledOther } from "./styles";

const Other = () => {
  const links: ArchiveLinkProps[] = [
    {
      href: "/pdf/infoOpening/other/01 Рейтинг АО НПФ Ренесанс пенсии ruAA-1617266870709.pdf",
      title: "Свидетельство о присвоении рейтинга Эксперт РА",
    },
    {
      href: "/pdf/infoOpening/other/02 Свидетельство о членстве в Ассоциации Европейского Бизнеса-1576773162632.pdf",
      title: "Свидетельство о членстве в Ассоциации Европейского Бизнеса",
    },
    {
      href: "/pdf/infoOpening/other/03 Правила корпоративной этики АО НПФ РП-1576773142054.pdf",
      title: "Правила корпоративной этики АО НПФ «Ренессанс пенсии»",
    },
    {
      href: "/pdf/infoOpening/other/04 npf-terms-of-personal-data-1605258268312.pdf",
      title: "Политика в отношении обработки персональных данных в АО НПФ «Ренессанс пенсии» (редакция 1.0)",
    },
  ];

  return (
    <StyledOther>
      <Container>
        <Heading>Прочие</Heading>

        <Content>
          {links.map((link, index) => (
            <ArchiveLink key={index} href={link.href} title={link.title} />
          ))}
        </Content>
      </Container>
    </StyledOther>
  );
};

export default Other;
