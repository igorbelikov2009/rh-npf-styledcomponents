import React, { FC } from "react";
import { IReport } from "../../../../interfaces/types";
import ArchiveLink from "../../../ui/links/ArchiveLink";
import { Header, Heading } from "./styles";

const Report: FC<IReport> = ({ heading, archiveLinks }) => {
  return (
    <>
      <Header>
        <Heading> {heading} </Heading>
      </Header>

      {archiveLinks.map((link, index) => (
        <ArchiveLink key={index} href={link.href} title={link.title} subtitle={link.subtitle} />
      ))}
    </>
  );
};

export default Report;
