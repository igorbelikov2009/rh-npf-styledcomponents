import React from "react";
import { ContainerOffisMan, DepartmentTitle, ManagementList, Name, Post, StyledBoardOfDirectors } from "./styles";

const BoardOfDirectors = () => {
  return (
    <StyledBoardOfDirectors>
      <DepartmentTitle>Совет директоров</DepartmentTitle>

      <ManagementList>
        <ContainerOffisMan>
          <Name>Артемьев Сергей Александрович</Name>
          <Post>Основное место работы: АО «Группа Ренессанс Страхование»</Post>
        </ContainerOffisMan>

        <ContainerOffisMan>
          <Name>Дегтеронак Дмитрий Адамович</Name>
          <Post>Основное место работы: АО «Группа Ренессанс Страхование»</Post>
        </ContainerOffisMan>

        <ContainerOffisMan>
          <Name>Королева Елена Викторовна</Name>
          <Post>Основное место работы: АО НПФ «Ренессанс пенсии»</Post>
        </ContainerOffisMan>

        <ContainerOffisMan>
          <Name>Тарасов Владимир Валерьевич</Name>
          <Post>Основное место работы: АО «Группа Ренессанс Страхование»</Post>
        </ContainerOffisMan>

        <ContainerOffisMan>
          <Name>Рябцов Сергей Львович</Name>
          <Post>Основное место работы: АО «Группа Ренессанс Страхование»</Post>
        </ContainerOffisMan>

        <ContainerOffisMan>
          <Name>Компиш Марина Валерьевна</Name>
          <Post>
            Основное место работы: Представительство Компании с ограниченной ответственностью "Спутник Инвестмент
            Лимитед" (Республика Кипр) в г. Москве
          </Post>
        </ContainerOffisMan>

        <ContainerOffisMan>
          <Name>Куранов Михаил Сергеевич</Name>
          <Post>Основное место работы: АО «Группа Ренессанс Страхование»</Post>
        </ContainerOffisMan>
      </ManagementList>
    </StyledBoardOfDirectors>
  );
};

export default BoardOfDirectors;
