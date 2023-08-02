import { IBusinessCard, ICarouselCard, ICard } from "../interfaces/types";

export const businessCards: IBusinessCard[] = [
  {
    icon: "Case",
    header: "Работодатель (Вкладчик)",
    titles: ["Определяет условия программы", "Уплачивает взносы в фонд"],
  },
  {
    icon: "Man",
    header: "Сотрудник (Участник)",
    titles: [
      "Заключает личный договор",
      "Уплачивает взносы в фонд",
      "Выполняет условия программы",
      "Получает пенсию или выкупную сумму",
    ],
  },
  {
    icon: "Bank",
    header: "Фонд",
    titles: [
      "Аккумулирует взносы вкладчика (Участника) ведет учет, распределяет нвестиционный доход",
      "Выплачивает негосударственные пенсии участникам",
    ],
  },
  {
    icon: "Settings",
    header: "Управляющая компания",
    titles: [
      "Определяет условия программы",
      "Уплачивает взносы в фонд",
      "Управляет портфелем ценных бумаг",
      "Инвестирует с целью получения дохода",
    ],
  },
];

export const cardsBusinessCarousel: ICarouselCard[] = [
  {
    value: "0",
    icon: "Money",
    title: "Увеличение социальных гарантий",
  },
  {
    value: "1",
    icon: "Circle",
    title: "Сокращение текучести кадров",
  },
  {
    value: "2",
    icon: "Young",
    title: "Своевременное омоложение коллектива",
  },
  {
    value: "3",
    icon: "Lever",
    title: "Рычаги управления коллективом",
  },
  {
    value: "4",
    icon: "Motivate",
    title: "Мотивация к долгосрочному труду",
  },
  {
    value: "5",
    icon: "Settings",
    title: "Оптимизация налогообложения организации",
  },
  {
    value: "6",
    icon: "Check",
    title: "Сокращение издержек на социальную поддержку пенсионеров",
  },
];

export const cardsBusinnesStatistic: ICard[] = [
  {
    icon: "Invest",
    subtitle: "Полная прозрачность инвестиционного процесса",
  },
  {
    icon: "Group",
    subtitle: "Представители крупных международных компаний составляют Попечительский Совет Фонда",
  },
  {
    icon: "Stock",
    subtitle: "Возможность гибкого формирования корпоративной пенсионной программы",
  },
  {
    icon: "Partner",
    subtitle: "Команда высококлассных специалистов в области управления пенсионными фондами",
  },
];