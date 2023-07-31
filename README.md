### `npm start`

1. Создадим приложение с помощью CRA с TypeScript.
   `npx create-react-app my-app --template typescript`

2. Установим Styled Components и типы для него.
   `npm i styled-components @types/styled-components`
3. Установим расширение vscode-styled-components для подсветки и подсказок в VSCode.
   `https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components`

4. Установим React Router DOM `npm i react-router-dom`

5. Типы для React Router DOM `npm i @types/react-router-dom`

6. Установим анимаццию framer-motion `npm install framer-motion`

7. Валидация полей формы `npm install react-hook-form`

8. Устанавливаем "react-redux", "@reduxjs/toolkit", типы для них
   `npm install react-redux @types/react-redux @reduxjs/toolkit`

9. Cоздаём store.ts, hooks/redux.ts, reducers/NewsSlice.ts . В index.ts создаём: const store = setupStore(); import { Provider } from "react-redux"; оборачиваем всё в <Provider store={store}>zdddsfsdds<Provider>

10. Устанавливаем "axios" `npm i axios`

11. `npm install -g json-server` скачаем json-server, с помощью которого мы сможем, буквально в два действия, поднять сервер, на котором уже будет, своего рода, база данных. Скачиваем отсюда (https://github.com/typicode/json-server).

12. Создадим файл `db.json`, файл с некоторыми данными из страницы по ссылке: {
    "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
    ],
    "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
    ],
    "profile": { "name": "typicode" }
    }

13. `json-server --watch db.json --port 5000` этой командой подымаем сервер

14. Если возникает проблема: "Невозможно загрузить файл, так как выполнение сценариев отключено в этой системе", то открываем терминал Windows - нажимаем `Win + X`. После этого выбираем Windows PowerShell (администратор), открывается Windows PowerShell. Далее, делаем по руководству
    `https://www.youtube.com/watch?v=vObwhyh5h5I&t=97s`

15. В окне "Windows PowerShell", в строке PS C:\Windows\system32> пишем команду

PS C:\Windows\system32> `Set-ExecutionPolicy Unrestricted -Scope CurrentUser`

16. На всякий случай установим препроцессоры SCSS и SASS
    `npm i scss-react`
    `npm i -D sass`

<!-- 17. `npm i @emotion/is-prop-valid` -->
