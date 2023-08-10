/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AdminLoginProps } from "../../../interfaces/types";
import InputTitle from "../../ui/inputs/InputTitle";
import { ButtonContainer, Heading, Input, Label, LineInvalid, SpanError, FormAdminLogin } from "./styles";
import InputSubmit from "../../ui/inputs/InputSubmit";
import PrimaryButton from "../../ui/buttons/PrimaryButton";

type Inputs = {
  userName: string;
  phone: string;
};

const AdminLogin: FC<AdminLoginProps> = ({ closeAdminLogin }) => {
  const [isAuth, setAuth] = useState(false);
  const [isActiveUserName, setActiveUserName] = useState(false);
  const [isActivePhone, setActivePhone] = useState(false);

  const {
    register, // позволяет регистрировать различные поля для форм
    formState: { errors, isValid }, // объект с ошибками и т.д...
    handleSubmit, // некая обертка над нашим кастомным обработчиком отправки формы, она позволяет делать магии, связанные с валидацией.
    reset, // для очистки полей после отправки формы
    watch, // следит за изменением значения
  } = useForm<Inputs>({ mode: "all" });

  let userData = {};
  // наш кастомный обработчик отправки формы
  const onSubmit: SubmitHandler<Inputs> = (userData) => {
    // userData - это набор данных из нашей формы
    // console.log(userData);
    localStorage.setItem("userData-renaissance-pension", JSON.stringify(userData));
    setAuth(true);
    localStorage.setItem("auth-renaissance", "true");
    reset();
    setActiveUserName(false);
    setActivePhone(false);
    closeAdminLogin();
  };
  // console.log(watch("userName")); // следит за изменением значения

  // Восстановить из localStorage
  if (localStorage.getItem("userData-renaissance-pension")) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    userData = JSON.parse(localStorage.getItem("userData-renaissance-pension") || "");
    // Для typescript вы можете использовать ||оператор и добавить к нему строку, чтобы она больше
    // не была нулевой. JSON.parse(localStorage.getItem("userData-renaissance-pension") || "")
  }
  //   console.log(userData);

  const handlerSignOut = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setAuth(false);
    localStorage.setItem("auth-renaissance", "false");
    closeAdminLogin();
  };

  return (
    <FormAdminLogin onSubmit={handleSubmit(onSubmit)}>
      <Heading>Вы администратор?</Heading>

      <Label>
        <InputTitle title="Ваше имя" isActive={isActiveUserName} />
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
        {errors?.userName && <SpanError>{errors?.userName?.message || "Error!"} </SpanError>}
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

      <ButtonContainer>
        <InputSubmit children="Отправить" disabled={!isValid} />
      </ButtonContainer>

      <ButtonContainer onClick={handlerSignOut}>
        <PrimaryButton children="Выйти" disabled={isAuth} />
      </ButtonContainer>
    </FormAdminLogin>
  );
};

export default AdminLogin;
