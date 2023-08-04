import React from "react";
import { ContainerOffisMan, DepartmentTitle, ManagementList, Name, StyledAuditCommittee } from "./styles";

const AuditCommittee = () => {
  return (
    <StyledAuditCommittee>
      <DepartmentTitle>Ревизионная комиссия</DepartmentTitle>

      <ManagementList>
        <ContainerOffisMan>
          <Name>Васюнина Анна Александровна</Name>
        </ContainerOffisMan>

        <ContainerOffisMan>
          <Name>Абдрашитов Евгений Александрович</Name>
        </ContainerOffisMan>

        <ContainerOffisMan>
          <Name>Игумнова Наталья Викторовна</Name>
        </ContainerOffisMan>

        <ContainerOffisMan>
          <Name>Кондратюк Яков Сергеевич</Name>
        </ContainerOffisMan>

        <ContainerOffisMan>
          <Name>Королёва Наталия Геннадьевна</Name>
        </ContainerOffisMan>
      </ManagementList>
    </StyledAuditCommittee>
  );
};

export default AuditCommittee;
