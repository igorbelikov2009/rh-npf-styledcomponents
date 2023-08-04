import React from "react";
import { ContainerOffisMan, DepartmentTitle, ManagementList, Name, StyledTeamController } from "./styles";

const TeamController = () => {
  return (
    <StyledTeamController>
      <DepartmentTitle>Контролер </DepartmentTitle>

      <ManagementList>
        <ContainerOffisMan>
          <Name>Трушкин Николай Константинович</Name>
        </ContainerOffisMan>
      </ManagementList>
    </StyledTeamController>
  );
};

export default TeamController;
