import React, { FC } from "react";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import { Container, ContainerButton, Date, ID, Paragraph, Title } from "./styles";

interface AdminPanelItemProps {
  id: number;
  title: string;
  date: string;
  paragraphs: string[];
  handlerRemove: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const AdminPanelItem: FC<AdminPanelItemProps> = ({ id, title, date, paragraphs, handlerRemove }) => {
  return (
    <Container>
      <ID>id: {id} </ID>
      <Title> {title} </Title>
      <Date> {date} </Date>

      {paragraphs.map((paragraph, index) => (
        <Paragraph key={index}> {paragraph} </Paragraph>
      ))}

      <ContainerButton onClick={handlerRemove}>
        <PrimaryButton children="Удалить" />
      </ContainerButton>
    </Container>
  );
};

export default AdminPanelItem;
