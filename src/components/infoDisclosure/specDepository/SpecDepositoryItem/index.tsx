import React, { FC } from "react";
import { SpecDepositoryItemProps } from "../../../../interfaces/types";
import { Paragraph, Subheading, Title } from "./styles";

const SpecDepositoryItem: FC<SpecDepositoryItemProps> = ({ title, subtitle, subheading }) => {
  return (
    <>
      <Paragraph>
        <Subheading> {subheading} </Subheading>
        <Title> {title} </Title>
      </Paragraph>

      <Paragraph>
        <Title> {subtitle} </Title>
      </Paragraph>
    </>
  );
};

export default SpecDepositoryItem;
