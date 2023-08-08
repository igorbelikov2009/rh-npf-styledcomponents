import React from "react";
import { ArchiveLinkProps } from "../../../../interfaces/types";
import ArchiveLink from "../../../ui/links/ArchiveLink";
import { Heading } from "./styles";

const ArchiveAssetValueRules = () => {
  const links: ArchiveLinkProps[] = [
    {
      href: "/pdf/infoOpening/archive-asset/01 Порядок определения стоимости чистых активов Фонда архив.pdf",
      title: "Порядок определения стоимости чистых активов Фонда",
    },
    {
      href: "/pdf/infoOpening/archive-asset/02 Порядок определения стоимости чистых активов РП (опубликовано 25.12.2018).pdf",
      title: "Порядок определения стоимости чистых активов АО НПФ «Ренессанс пенсии» (опубликовано: 25.12.2018)",
    },
  ];

  return (
    <>
      <Heading>Правила определения стоимости чистых активов</Heading>

      {links.map((link, index) => (
        <ArchiveLink key={index} href={link.href} title={link.title} />
      ))}
    </>
  );
};

export default ArchiveAssetValueRules;
