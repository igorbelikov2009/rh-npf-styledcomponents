import React from "react";
import { Description, StyledAboutUs } from "./styles";

const AboutUs = () => {
  return (
    <StyledAboutUs>
      <Description>
        Мы являемся одним из немногих безотраслевых фондов, что позволяет нам вести абсолютно прозрачную и независимую
        инвестиционную политику в отношении наших клиентов и занимать лидирующие позиции на протяжении последних 15 лет.
      </Description>
      <Description>Акционерами Фонда являются: ООО "Велби Холдинг" и АО СК "Ренессанс здоровье".</Description>
    </StyledAboutUs>
  );
};

export default AboutUs;
