import React, { FC } from "react";
import logoColored from "../../../assets/logotype/logoColored.svg";
import logoWhite from "../../../assets/logotype/logoWhite.svg";
import logoColoredSmall from "../../../assets/logotype/logoColoredSmall.svg";
import logoWhiteSmall from "../../../assets/logotype/logoWhiteSmall.svg";
import { Container, LogotypeLarge, LogotypeSmall } from "./styles";

interface LogotypesProps {
  isBackgroundWhite?: boolean;
}

const Logotypes: FC<LogotypesProps> = ({ isBackgroundWhite }) => {
  return (
    <Container href="#">
      <LogotypeLarge>
        <img src={isBackgroundWhite ? logoColored : logoWhite} alt="logotype" />
      </LogotypeLarge>

      <LogotypeSmall>
        <img src={isBackgroundWhite ? logoColoredSmall : logoWhiteSmall} alt="logotype" />
      </LogotypeSmall>
    </Container>
  );
};

export default Logotypes;
