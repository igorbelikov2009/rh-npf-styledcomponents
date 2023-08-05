import React, { FC } from "react";
import logoColored from "../../../assets/logotype/logoColored.svg";
import logoWhite from "../../../assets/logotype/logoWhite.svg";
import logoColoredSmall from "../../../assets/logotype/logoColoredSmall.svg";
import logoWhiteSmall from "../../../assets/logotype/logoWhiteSmall.svg";
import { Container, LogotypeLarge, LogotypeSmall } from "./styles";

interface LogotypesProps {
  backgroundwhite?: boolean;
}

const Logotypes: FC<LogotypesProps> = ({ backgroundwhite }) => {
  return (
    <Container href="#">
      <LogotypeLarge>
        <img src={backgroundwhite ? logoColored : logoWhite} alt="logotype" />
      </LogotypeLarge>

      <LogotypeSmall>
        <img src={backgroundwhite ? logoColoredSmall : logoWhiteSmall} alt="logotype" />
      </LogotypeSmall>
    </Container>
  );
};

export default Logotypes;
