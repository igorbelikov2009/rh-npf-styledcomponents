import React, { useMemo, useState } from "react";
import {
  Adress,
  Contact,
  Heading,
  NewsContainer,
  NewsList,
  Phone,
  Radio,
  SelectRadioContainer,
  Selector,
  StyledListNews,
} from "./styles";
import { news } from "../../../data/newsData";
import { INews } from "../../../interfaces/types";
import useDate from "../../../api/useDate/useDate";
import SelectorAndOptionBlock from "../../ui/select/SelectorAndOptionBlock";
import AdaptiveRadio from "../../ui/radios/AdaptiveRadio";
import NewsLink from "../NewsLink";

const ListNews = () => {
  const [selectedYear, setSelectedYear] = useState("2021");
  const [, setId] = useState("0");
  const [isVisible, setRadioListVisible] = useState(false);

  // Из полученных данных создаём radioYears (optionsItems)
  const optionsItems = [...news]
    // Создаём массив из дат новостей, предварительно форматируя их в года
    .map((item) => new Date(item.date).getFullYear())
    // Сортируем массив по возрастанию
    .sort((a, b) => b - a)
    // Фильтруем массив, оставляем только уникальные значения.
    .filter((elem, index, array) => array.indexOf(elem) === index)
    // Создаём массив объектов с ключами:
    .map((item, index) => ({
      id: String(index),
      date: String(item),
      value: String(item),
    }));

  // новости, отфильтрованные по годам
  const newsFilteredByYear = useMemo(() => {
    return [...news].filter((item) => {
      return new Date(item.date).getFullYear() === Number(selectedYear);
    });
  }, [selectedYear]);

  // форматируем дату у новостей, отфильтрованных по годам
  const formatedFilteredByYear: INews[] = useMemo(() => {
    return [...newsFilteredByYear].map((item) => ({
      id: Number(item.id),
      title: String(item.title),
      date: String(useDate.format(new Date(item.date))),
      paragraphs: item.paragraphs,
    }));
  }, [newsFilteredByYear]);

  const onClickSelector = () => {
    setRadioListVisible((prev) => !prev);
  };
  const onChangeRadio = (value: string, id: string) => {
    setSelectedYear(value);
    setId(id);
  };
  const onClickRadio = () => {
    setRadioListVisible(false);
  };
  const onChangeAdaptiveRadio = (value: string, id: string) => {
    setSelectedYear(value);
    setId(id);
  };

  return (
    <StyledListNews>
      <SelectRadioContainer>
        <Selector>
          <SelectorAndOptionBlock
            currentValue={selectedYear}
            optionsItems={optionsItems}
            isVisible={isVisible}
            onClickSelector={onClickSelector}
            emitOnChangeRadio={onChangeRadio}
            emitOnClickRadio={onClickRadio}
          />
        </Selector>

        <Radio>
          <AdaptiveRadio currentValue={selectedYear} optionsItems={optionsItems} emitValue={onChangeAdaptiveRadio} />
        </Radio>
      </SelectRadioContainer>

      <NewsContainer>
        <NewsList>
          {formatedFilteredByYear.map((item) => (
            <NewsLink key={item.id} date={item.date} title={item.title} id={item.id} />
          ))}
        </NewsList>

        <Contact>
          <Heading>Контакты пресс-службы</Heading>

          <Adress>115114, Россия, Москва, Дербеневская набережная, 7, стр. 22, подъезд B, 3 этаж</Adress>

          <Phone>Телефон: 8 (495) 933-47-66</Phone>
        </Contact>
      </NewsContainer>
    </StyledListNews>
  );
};

export default ListNews;
