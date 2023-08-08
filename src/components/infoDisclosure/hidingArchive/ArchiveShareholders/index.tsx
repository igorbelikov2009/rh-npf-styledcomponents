import React from "react";
import { styled } from "styled-components";
import { linksArchiveShareholders } from "../../../../data/infoDisclosureData";
import ArchiveLink from "../../../ui/links/ArchiveLink";

export const Heading = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #5a646e;
  margin-bottom: 48px;
  margin-top: 36px;
`;

const ArchiveShareholders = () => {
  return (
    <>
      <Heading>Структура и состав акционеров</Heading>

      {linksArchiveShareholders.map((link, index) => (
        <ArchiveLink key={index} href={link.href} title={link.title} />
      ))}
    </>
  );
};

export default ArchiveShareholders;
