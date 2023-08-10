/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import InputSubmit from "../../ui/inputs/InputSubmit";
import InputTitle from "../../ui/inputs/InputTitle";
import {
  ButtonContainer,
  Container,
  Heading,
  Input,
  Label,
  LabelContainer,
  LineInvalid,
  SpanError,
  StyledBusinnesForm,
  StyledForm,
  StyledFormContainer,
  Subheading,
} from "./styles";

type Inputs = {
  userName: string;
  phone: string;
  email: string;
  companyName: string;
};

const BusinnesForm = () => {
  const [isActiveUserName, setActiveUserName] = useState(false);
  const [isActivePhone, setActivePhone] = useState(false);
  const [isActiveEmail, setActiveEmail] = useState(false);
  const [isActiveCompanyName, setActiveCompanyName] = useState(false);

  const {
    register, // позволяет регистрировать различные поля для форм
    formState: { errors, isValid }, // объект с ошибками и т.д...
    handleSubmit, // некая обертка над нашим кастомным обработчиком отправки формы, она позволяет делать магии, связанные с валидацией.
    reset, // для очистки полей после отправки формы
    watch, // следит за изменением значения
  } = useForm<Inputs>({ mode: "all" }); // all / onBlur / onChange / onSubmit / onTouched

  let companyData = {};

  const onSubmit: SubmitHandler<Inputs> = (companyData) => {
    //  companyData - это набор данных из нашей формы
    console.log(companyData);
    localStorage.setItem("companyData-renaissance-pension", JSON.stringify(companyData));
    reset();
    setActiveUserName(false);
    setActivePhone(false);
    setActiveEmail(false);
    setActiveCompanyName(false);
  };
  //   console.log(watch("userName")); // следит за изменением значения

  // Восстановить из localStorage
  if (localStorage.getItem("companyData-renaissance-pension")) {
    companyData = JSON.parse(localStorage.getItem("companyData-renaissance-pension") || "");
    // Для typescript вы можете использовать ||оператор и добавить к нему строку, чтобы она больше
    // не была нулевой. JSON.parse(localStorage.getItem("companyData-renaissance-pension") || "")
  }
  // console.log(companyData);

  return (
    <StyledBusinnesForm>
      <Container>
        <>
          <Heading>Свяжитесь с нами</Heading>
          <Subheading>
            Наши специалисты по пенсионным программам помогут составить персональную программу для сотрудников вашей
            компании
          </Subheading>
        </>

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledFormContainer>
            <LabelContainer>
              <Label>
                <InputTitle title="Как вас зовут?" isActive={isActiveUserName} />

                <Input
                  type="text"
                  {...register("userName", {
                    required: "Это поле обязательно к заполнению",
                    onChange: (event) => {
                      setActiveUserName(true);
                    },
                    onBlur: () => {
                      if (watch("userName").length === 0) {
                        setActiveUserName(false);
                      }
                    },
                    minLength: {
                      value: 3,
                      message: "Минимум 3 символов",
                    },
                  })}
                />

                {errors?.userName && <LineInvalid />}
                {errors?.userName && <SpanError>{errors?.userName?.message || "Error!"}</SpanError>}
              </Label>
            </LabelContainer>

            <LabelContainer>
              <Label>
                <InputTitle title="Телефон" isActive={isActivePhone} />

                <Input
                  type="tel"
                  {...register("phone", {
                    required: "Это поле обязательно к заполнению",
                    onChange: (event) => {
                      setActivePhone(true);
                    },
                    onBlur: () => {
                      if (watch("phone").length === 0) {
                        setActivePhone(false);
                      }
                    },
                    minLength: {
                      value: 11,
                      message: "Минимум 11 символов",
                    },
                    maxLength: {
                      value: 16,
                      message: "Максимум 16 символов",
                    },
                  })}
                />

                {errors?.phone && <LineInvalid />}
                {errors?.phone && <SpanError>{errors?.phone?.message || "Error!"}</SpanError>}
              </Label>
            </LabelContainer>

            <LabelContainer>
              <Label>
                <InputTitle title="Электронная почта" isActive={isActiveEmail} />

                <Input
                  type="email"
                  {...register("email", {
                    required: "Это поле обязательно к заполнению",
                    onChange: (event) => {
                      setActiveEmail(true);
                    },
                    onBlur: () => {
                      if (watch("email").length === 0) {
                        setActiveEmail(false);
                      }
                    },

                    minLength: {
                      value: 5,
                      message: "Минимум 5 символов",
                    },
                  })}
                />

                {errors?.email && <LineInvalid />}
                {errors?.email && <SpanError>{errors?.email?.message || "Error!"}</SpanError>}
              </Label>
            </LabelContainer>

            <LabelContainer>
              <Label>
                <InputTitle title="Название компании" isActive={isActiveCompanyName} />

                <Input
                  type="text"
                  {...register("companyName", {
                    required: "Это поле обязательно к заполнению",
                    onChange: (event) => {
                      setActiveCompanyName(true);
                    },
                    onBlur: () => {
                      if (watch("companyName").length === 0) {
                        setActiveCompanyName(false);
                      }
                    },
                    minLength: {
                      value: 5,
                      message: "Минимум 5 символов",
                    },
                  })}
                />

                {errors?.companyName && <LineInvalid />}
                {errors?.companyName && <SpanError>{errors?.companyName.message || "Error!"}</SpanError>}
              </Label>
            </LabelContainer>
          </StyledFormContainer>

          <ButtonContainer>
            <InputSubmit children="Оставить заявку" disabled={!isValid} />
          </ButtonContainer>
        </StyledForm>
      </Container>
    </StyledBusinnesForm>
  );
};

export default BusinnesForm;
