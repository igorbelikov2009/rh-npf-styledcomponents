import React from "react";
import { ContainerOffisMan, DepartmentTitle, ManagementList, Name, Post, StyledTeam } from "./styles";

const Team = () => {
  return (
    <StyledTeam>
      <DepartmentTitle>Команда</DepartmentTitle>

      <ManagementList>
        <ContainerOffisMan>
          <Name>Перевязкина Анна</Name>
          <Post>Управляющий директор</Post>
        </ContainerOffisMan>

        <ContainerOffisMan>
          <Name>Кондратюк Яков</Name>
          <Post>Руководитель казначейства</Post>
        </ContainerOffisMan>

        <ContainerOffisMan>
          <Name>Королёва Наталия</Name>
          <Post>Директор Департамента сопровождения договоров негосударственного пенсионного обеспечения</Post>
        </ContainerOffisMan>

        <ContainerOffisMan>
          <Name>Тимофеев Александр</Name>
          <Post>Начальник юридического управления</Post>
        </ContainerOffisMan>

        <ContainerOffisMan>
          <Name>Матвеева Евгения</Name>
          <Post>Руководитель операционного отдела</Post>
        </ContainerOffisMan>

        <ContainerOffisMan>
          <Name>Симоненко Анастасия</Name>
          <Post>Руководитель клиентской службы</Post>
        </ContainerOffisMan>

        <ContainerOffisMan>
          <Name>Абдрашитов Евгений</Name>
          <Post>Руководитель службы риск-менеджмента</Post>
        </ContainerOffisMan>
      </ManagementList>
    </StyledTeam>
  );
};

export default Team;
