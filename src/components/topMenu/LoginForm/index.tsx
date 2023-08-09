import React, { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginFormProps } from "../../../interfaces/types";
import InputSubmit from "../../ui/inputs/InputSubmit";
import Checkbox from "../../ui/Checkbox/Checkbox";
import {
  ButtonContainer,
  CheckboxContainer,
  Heading,
  Input,
  InputContainer,
  Label,
  LineInvalid,
  Span,
  SpanError,
  StyledLoginForm,
  Subtitle,
  Title,
} from "./styles";
import InputTitle from "../../ui/inputs/InputTitle";

type Inputs = {
  phone: string;
};

const LoginForm: FC<LoginFormProps> = ({ isVisible, closeLoginForm }) => {
  const [isActive, setActive] = useState(false);
  const [isAgree, setAgree] = useState(false);
  const titleCheckbox = "Я прочитал(-а)";
  const spanCheckbox = " условия соглашения ";
  const subtitleCheckbox = "и, нажимая кнопку «Продолжить», принимаю их";

  const {
    register, // позволяет регистрировать различные поля для форм
    formState: { errors, isValid }, // объект с ошибками и т.д...
    handleSubmit, // некая обертка над нашим кастомным обработчиком отправки формы, она позволяет делать магии, связанные с валидацией.
    reset, // для очистки полей после отправки формы
    watch, // следит за изменением значения
  } = useForm<Inputs>({ mode: "all" }); // all / onBlur / onChange / onSubmit / onTouched

  // наш кастомный обработчик отправки формы
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    //  data - это набор данных из нашей формы
    // console.log(data);
    reset();
    setActive(true);
    setAgree(false);
    closeLoginForm();
  };

  const toogleChecked = () => {
    setAgree(!isAgree);
  };

  return (
    <StyledLoginForm visible={isVisible} onSubmit={handleSubmit(onSubmit)}>
      <Heading>Вход/Регистрация</Heading>

      <>
        <InputContainer>
          <Label>
            <InputTitle title="Телефон" isActive={isActive} />

            <Input
              {...register("phone", {
                required: "Это поле обязательно к заполнению",
                onChange: (event) => {
                  setActive(true);
                },
                onBlur: () => {
                  if (watch("phone").length === 0) {
                    setActive(false);
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
        </InputContainer>

        <CheckboxContainer>
          <Checkbox
            checkedValue={isAgree}
            toogleChecked={toogleChecked}
            title={titleCheckbox}
            span={spanCheckbox}
            subtitle={subtitleCheckbox}
          />
        </CheckboxContainer>

        <ButtonContainer>
          <InputSubmit children="Продолжить" disabled={!isValid || !isAgree} />
        </ButtonContainer>
      </>

      <Title>
        Вход для клиентов
        <Span> НПФ "Ренессанс - пенсии"</Span>
      </Title>

      <Subtitle>
        Нажимая кнопку «Продолжить», вы выражаете согласие на обработку своих персональных данных и принимаете условия
        соглашения
      </Subtitle>
    </StyledLoginForm>
  );
};

export default LoginForm;
