import React from "react";
import {
  ContainerOffisMan,
  DepartmentTitle,
  ManagementList,
  Name,
  Post,
  StyledGeneralMeetingOfShareholders,
} from "./styles";

const GeneralMeetingOfShareholders = () => {
  return (
    <StyledGeneralMeetingOfShareholders>
      <DepartmentTitle>Общее собрание акционеров</DepartmentTitle>

      <ManagementList>
        <ContainerOffisMan>
          <Name>Высшим органом управления Фондом</Name>
          <Name>является Общее собрание акционеров</Name>
          <Post>Акционерами Фонда являются:</Post>
          <Name>АО «НПФ Сбербанка»</Name>
          <Name>ООО «Велби Холдинг»</Name>
        </ContainerOffisMan>
      </ManagementList>
    </StyledGeneralMeetingOfShareholders>
  );
};

export default GeneralMeetingOfShareholders;
