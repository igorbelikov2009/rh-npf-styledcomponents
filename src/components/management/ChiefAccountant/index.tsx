import React from "react";
import { ContainerOffisMan, DepartmentTitle, ManagementList, Name, StyledChiefAccountant } from "./styles";

const ChiefAccountant = () => {
  return (
    <StyledChiefAccountant>
      <DepartmentTitle>Главный бухгалтер</DepartmentTitle>

      <ManagementList>
        <ContainerOffisMan>
          <Name>Васюнина Анна Александровна</Name>
        </ContainerOffisMan>
      </ManagementList>
    </StyledChiefAccountant>
  );
};

export default ChiefAccountant;
