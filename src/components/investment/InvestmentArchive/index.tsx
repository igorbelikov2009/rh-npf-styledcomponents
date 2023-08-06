import React from "react";
import { ArchiveLinkProps } from "../../../interfaces/types";
import ArchiveLink from "../../ui/links/ArchiveLink";
import { StyledInvestmentArchive } from "./styles";

const InvestmentArchive = () => {
  const links: ArchiveLinkProps[] = [
    {
      href: "/pdf/invest/Архив структуры инвестиционного портфеля Фонда-1578928598453-1579866841961.pdf",
      title: "Архив структуры инвестиционного портфеля Фонда",
    },
    {
      href: "/pdf/invest/Информация о процессе размещения средств ПР_10.02-1581662050140.pdf",
      title: "Информация о процессе размещения средств",
    },
  ];
  return (
    <StyledInvestmentArchive>
      {links.map((link, index) => (
        <ArchiveLink key={index} href={link.href} title={link.title} subtitle={link.subtitle} />
      ))}
    </StyledInvestmentArchive>
  );
};

export default InvestmentArchive;
