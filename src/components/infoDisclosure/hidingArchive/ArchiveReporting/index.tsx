import React from "react";
import { reportsArchive } from "../../../../data/infoDisclosureData";
import ArchiveLink from "../../../ui/links/ArchiveLink";
import { Header, Heading, Title } from "./styles";

const ArchiveReporting = () => {
  return (
    <>
      <Title>Отчетность</Title>

      {reportsArchive.map((report, index) => (
        <div key={index}>
          <Header>
            <Heading> {report.heading} </Heading>
          </Header>

          {report.links.map((link, index) => (
            <ArchiveLink key={index} href={link.href} title={link.title} />
          ))}
        </div>
      ))}
    </>
  );
};

export default ArchiveReporting;
