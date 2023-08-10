/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import InputTitle from "../../ui/inputs/InputTitle";
import {
  ButtonContainer,
  Container,
  Content,
  CustomerService,
  Form,
  Heading,
  Input,
  Label,
  LineInvalid,
  PhoneSupport,
  PhoneTitle,
  Span,
  SpanError,
  StyledSupportForm,
} from "./styles";
import InputSubmit from "../../ui/inputs/InputSubmit";

type Inputs = {
  userName: string;
  phone: string;
  email: string;
  message: string;
  password: string;
};

const SupportForm = () => {
  const [isActiveUserName, setActiveUserName] = useState(false);
  const [isActivePhone, setActivePhone] = useState(false);
  const [isActiveEmail, setActiveEmail] = useState(false);
  const [isActivePassword, setActivePassword] = useState(false);
  const [isActiveMessage, setActiveMessage] = useState(false);

  const {
    register, // позволяет регистрировать различные поля для форм
    formState: { errors, isValid }, // объект с ошибками и т.д...
    handleSubmit, // некая обертка над нашим кастомным обработчиком отправки формы, она позволяет делать магии, связанные с валидацией.
    reset, // для очистки полей после отправки формы
    watch, // следит за изменением значения
  } = useForm<Inputs>({ mode: "all" }); // all / onBlur / onChange / onSubmit / onTouched

  let formData = {};

  // наш кастомный обработчик отправки формы
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    // formData - это набор данных из нашей формы
    // console.log(formData);
    localStorage.setItem("formData-renaissance-pension", JSON.stringify(formData));
    reset();
    setActiveUserName(false);
    setActivePhone(false);
    setActiveEmail(false);
    setActivePassword(false);
    setActiveMessage(false);
  };
  // console.log(watch("firstName")); // следит за изменением значения

  // Восстановить из localStorage
  if (localStorage.getItem("formData-renaissance-pension")) {
    formData = JSON.parse(localStorage.getItem("formData-renaissance-pension") || "");
    // Для typescript вы можете использовать ||оператор и добавить к нему строку, чтобы она больше
    // не была нулевой. JSON.parse(localStorage.getItem("formData-renaissance-pension") || "")
  }
  //   console.log(formData)

  return (
    <StyledSupportForm>
      <Container>
        <Content>
          <CustomerService>
            <Heading>
              Клиентская <Span>служба</Span>
            </Heading>
            <PhoneSupport href="tel:+78002004766"> 8 800 200-47-66 </PhoneSupport>
            <PhoneTitle>звонок бесплатный</PhoneTitle>
          </CustomerService>
        </Content>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>
            <InputTitle title="Как вас зовут?" isActive={isActiveUserName} />

            <Input
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
            {errors?.phone && <SpanError>{errors?.phone?.message || "Error!"} </SpanError>}
          </Label>

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

          <Label>
            <InputTitle title="Ваш пароль" isActive={isActivePassword} />

            <Input
              type="text"
              {...register("password", {
                required: "Это поле обязательно к заполнению",
                onChange: (event) => {
                  setActivePassword(true);
                },
                onBlur: () => {
                  if (watch("password").length === 0) {
                    setActivePassword(false);
                  }
                },

                minLength: {
                  value: 5,
                  message: "Минимум 5 символов",
                },
              })}
            />

            {errors?.password && <LineInvalid />}
            {errors?.password && <SpanError>{errors?.password?.message || "Error!"}</SpanError>}
          </Label>

          <Label>
            <InputTitle title="Сообщение" isActive={isActiveMessage} />

            <Input
              type="text"
              {...register("message", {
                required: "Это поле обязательно к заполнению",
                onChange: (event) => {
                  setActiveMessage(true);
                },
                onBlur: () => {
                  if (watch("message").length === 0) {
                    setActiveMessage(false);
                  }
                },

                minLength: {
                  value: 15,
                  message: "Минимум 15 символов",
                },
              })}
            />

            {errors?.message && <LineInvalid />}
            {errors?.message && <SpanError>{errors?.message?.message || "Error!"}</SpanError>}
          </Label>

          <ButtonContainer>
            <InputSubmit children="Оставить заявку" disabled={!isValid} />
          </ButtonContainer>
        </Form>
      </Container>
    </StyledSupportForm>
  );
};

export default SupportForm;
