import React from "react";
import styled from "styled-components";

export const Container = styled.div``;

export const Heading = styled.h2`
  font-size: 34px;
  line-height: 48px;
  color: #28323c;
  font-weight: 400;
  letter-spacing: normal;
  margin: 24px 0;
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: #5a646e;
  margin: 24px 0;
`;

export const ManagementName = styled.h3`
  font-size: 34px;
  line-height: 48px;
  color: #28323c;
  font-weight: 400;
  letter-spacing: normal;
  margin-top: 72px;
`;

export const NameSpan = styled.span`
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  color: #001100;
`;

export const Post = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #96a0aa;
  margin-bottom: 24px;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #5a646e;
  margin-bottom: 24px;
`;

export const AlignmentLine = styled.hr`
  border-top: 1px solid #e6f0fa;
  margin-top: 63px;
  position: relative;
  top: 10px;
  border: none;
`;

const GoverningBody = () => {
  return (
    <Container>
      <Heading>Правление</Heading>

      <Description>
        Правление является коллегиальным исполнительным органом и осуществляет текущее руководство деятельностью Фонда в
        пределах своей компетенции, установленной Уставом Фонда:
      </Description>

      <ManagementName>Королева Елена Викторовна</ManagementName>
      <NameSpan> (предыдущая фамилия – Горшкова) </NameSpan>
      <Post>Генеральный директор. Единоличный исполнительный орган</Post>

      <Paragraph>
        Опыт работы на финансовом рынке (в кредитных и некредитных финансовых организациях) - более 21 года. В
        пенсионной индустрии с 2004 г.
      </Paragraph>

      <Paragraph>
        До прихода в АО НПФ "Ренессанс пенсии", в течение 11 лет возглавляла НПФ «Райффайзен». С 1998 г. она возглавляла
        отдел продаж и маркетинга в депозитарии «Райффайзенбанк Австрия», до этого работала в московских офисах ING Bank
        и Merrill Lynch.
      </Paragraph>

      <Paragraph>
        Является членом Европейского пенсионного клуба. Получила высшее образование в Военном университете. Проходила
        обучение по программе МВА в Калифорнийском университете и курс для топ-менеджеров в Бизнес-школе Сколково.
      </Paragraph>

      <Paragraph>
        * является лицом, имеющим право подписи при принятии решений относительно размещения средств пенсионных
        резервов, предусмотренных подпунктами 3.1.1 - 3.1.3, 3.1.5 пункта 3.1 Указания Банка России от 4 июля 2016 года
        № 4060-У «О требованиях к организации системы управления рисками негосударственного пенсионного фонда», а также
        при утверждении внутренних документов Фонда, предусмотренных указанными подпунктами.
      </Paragraph>

      <ManagementName>Перевязкина Анна Сергеевна</ManagementName>
      <Post>Управляющий директор Фонда</Post>

      <ManagementName>Тимофеев Александр Анатольевич</ManagementName>
      <Post>Начальник юридического управления</Post>

      <AlignmentLine />
    </Container>
  );
};

export default GoverningBody;
