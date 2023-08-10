import { combineReducers, configureStore } from "@reduxjs/toolkit";
import newsReducer from "./reducers/newsReducer";
import { newsAPI } from "./services/newsAPI";

// Создаём корневой редюсер, состоящий из комбинации всех редюсеров
const rootReducer = combineReducers({
  newsReducer,
  [newsAPI.reducerPath]: newsAPI.reducer,
});

// Создаём функцию setupStore, с помощью её мы будем конфигурировать
// наше редакс-хранилище. Без использования toolkit мы использовали
// createReducer. Сейчас используем configureStore().

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsAPI.middleware),
  });
};

// Три базовых типа, которые нам в дальнейшей работе понадобятся:
// Нам необходимо получить тип нашего состояния:
export type RootState = ReturnType<typeof rootReducer>;

// Так же получим тип самого стора:
export type AppStore = ReturnType<typeof setupStore>;

// Так же получим тип dispatch нашего хранилища. Определив тип диспатча,
// мы не сможем задиспачить те экшены, которые мы не определили
export type AppDispatch = AppStore["dispatch"];
