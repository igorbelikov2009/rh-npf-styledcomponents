import React from "react";
import { linksDocumentsOfTitle } from "../../../data/infoDisclosureData";
import ArchiveLink from "../../ui/links/ArchiveLink";
import { Container, Heading, List, StyledDocumentsOfTitle } from "./styles";

const DocumentsOfTitle = () => {
  return (
    <StyledDocumentsOfTitle>
      <Container>
        <Heading>Правоустанавливающие документы</Heading>

        <List>
          {linksDocumentsOfTitle.map((link, index) => (
            <ArchiveLink key={index} href={link.href} title={link.title} />
          ))}
        </List>
      </Container>
    </StyledDocumentsOfTitle>
  );
};

export default DocumentsOfTitle;
