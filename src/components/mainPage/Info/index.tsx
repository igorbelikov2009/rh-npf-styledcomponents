import React from "react";
import imageGirl from "../../../assets/images/main/girl.jpg";
import imageBuilding from "../../../assets/images/main/building.jpg";
import PrimaryButton from "../../ui/buttons/PrimaryButton";
import {
  BlockOffers,
  ButtonContainer,
  Head,
  Heading,
  Images,
  ImgBuilding,
  Offer,
  StyledImg,
  StyledInfo,
  Subheading,
  Subtitle,
  Title,
} from "./styles";

const Info = () => {
  return (
    <StyledInfo>
      <Head>
        <Heading>Ренессанс пенсии входит в число десяти крупнейших негосударственных пенсионных фондов России</Heading>

        <Subheading>
          По состоянию на 31 марта 2019 фонд ведет более 150 корпоративных пенсионных планов, объем резервов которых
          превышает 18 млрд. рублей.
        </Subheading>
      </Head>

      <Images>
        <StyledImg src={imageGirl} alt="girl" />

        <StyledImg src={imageBuilding} alt="Building" />
      </Images>

      <BlockOffers>
        <Offer>
          <Title>Для себя</Title>

          <Subtitle>
            Сохраните уровень дохода после окончания карьеры — оформите индивидуальный пенсионный план и формируйте
            собственную пенсию.
          </Subtitle>

          <ButtonContainer>
            <PrimaryButton children="Хочу знать больше" />
          </ButtonContainer>
        </Offer>

        <ImgBuilding src={imageBuilding} alt="Building" />

        <Offer>
          <Title>Для бизнеса</Title>

          <Subtitle>
            Корпоративные пенсионные программы дополнят соц пакет сотрудников и станут долгосрочным инструментом
            мотивации персонала.
          </Subtitle>

          <ButtonContainer>
            <PrimaryButton children="Отправить заявку" />
          </ButtonContainer>
        </Offer>
      </BlockOffers>
    </StyledInfo>
  );
};

export default Info;
