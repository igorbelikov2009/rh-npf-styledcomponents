import { FooterLinkProps } from "../interfaces/types";

export const firstBlock: FooterLinkProps[] = [
  {
    to: "/support#form",
    children: "Написать нам",
  },
  {
    to: "/support#questionsAnswers",
    children: "Вопросы и ответы",
  },
  { to: "/about", children: "О Фонде" },
  { to: "/managment", children: "Руководство фонда" },
];

export const secondBlock: FooterLinkProps[] = [
  {
    children: "Новости",
    to: "/news",
  },
  {
    children: "Налогообложение",
    to: "/taxation",
  },
  {
    children: "Для бизнеса",
    to: "/business",
  },
  {
    children: "Калькулятор",
    to: "/#calculator",
  },
];

export const thirdBlock: FooterLinkProps[] = [
  {
    children: "Раскрытие информации",
    to: "/info",
  },
  {
    children: "Инвестиционная деятельность",
    to: "/investment",
  },
];
