<h1 align="center">Учебный проект: "Место"</h1>

<div align="center">
  <a href="https://elrouss.github.io/mesto/">
    <img width="600" alt="Снимок экрана 2022-12-12 в 00 59 03" src="https://user-images.githubusercontent.com/108838349/206931608-5636650f-d971-4993-a0ff-ad0a0bb86619.png" alt="Демонстрация стартовой страницы сайта">>
  </a>
</div>

## 1. Описание проекта
Данная проектная работа составлена в рамках образовательной программы Яндекс Практикума. Проект представляет собой создание адаптивного одностраничного сайта с профилем пользователя и фотокарточками - аналога популярных соцсетей - с применением нативных технологий (HTML5, CSS3, JS). В рамках учеюного курса он был также <a href="https://github.com/elrouss/mesto-react">портирован на "React"</a> и <a href="https://github.com/elrouss/react-mesto-auth">расширен</a> добавлением функционала регистрации и авторизации пользователей.

<h4>Ссылка на макеты:
<br>
https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1
https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?node-id=0%3A1
https://www.figma.com/file/kRVLKwYG3d1HGLvh7JFWRT/JavaScript.-Sprint-6?node-id=0%3A1
https://www.figma.com/file/PSdQFRHoxXJFs2FH8IXViF/JavaScript-9-sprint?node-id=0%3A1
<br>
<br>
Ссылка на проект: https://elrouss.github.io/mesto/</h4>

<i>* - проект прошел код-ревью</i>

## 2. Стек технологий
<span>
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="Иконка JavaScript">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="Иконка CSS3">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="Иконка HTML5">
  <img src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white" alt="Иконка 'Webpack'">
</span>

## 3. Установка и запуск приложения в локальном репозитории, эксплуатация
1. `git clone https://elrouss.github.io/mesto.git` - клонировать репозиторий (с использованием HTTPS) на свое устройство
2. `npm i` - установить зависимости
3. `npm run dev` - запустить приложение в режиме разработчика (в браузере ввести ссылку `http://localhost:8080/`, если приложение не открылось там автоматически)

## 4. Процесс создания
Работа разделена на <b>6</b> этапов:
1. Верстка, реализация открытия и закрытия модального окна с возможностью редактирования данных профиля
2. Интерактивные элементы страницы: добавление и удаление карточки, лайки, открытие фотографии карточки в отдельном модальном окне, плавное открытие и закрытие попапов
3. Валидация форм, закрытие модальных кликом по оверлею и нажатием на клавишу "Escape"
4. Начало рефакторинга (переход к классам): добавление компонентов Card и FormValidator, разбиение на модули, директивы import & export
5. Завершение рефакторинга: структуризация проекта, переписывание функций под 5 новых классов (Section, Popup, PopupWithImage, PopupWithForm, UserInfo), сборка проекта Вебпаком
6. Подключение к серверу: загрузка информации о пользователе, обновление аватара, загрузка карточек (добавление и удаление), счетчик лайков, улучшение UX всех форм

### 4.1 Основные задачи, проблемы и их решение
1. Плавное открытие и закрытие модальных окон
<p>
  <b>Решение:</b> 
</p>

## 5. Функционал
<details>
  <summary>Адаптивный интерфейс</summary>
  <a href="https://elrouss.github.io/mesto/">
    <img width="500" src="" alt="Гиф с демонстрацией адаптивного интерфейса приложения">
  </a>
</details>

<details>
  <summary>Редактирование данных пользователя</summary>
  <a href="https://elrouss.github.io/mesto/">
    <img width="500" src="" >
  </a>
</details>

<details>
  <summary>Обновление аватара</summary>
  <a href="https://elrouss.github.io/mesto/">
    <img width="500" src="" >
  </a>
</details>

<details>
  <summary>Добавление новой карточки</summary>
  <a href="https://elrouss.github.io/mesto/">
    <img width="500" src="" >
  </a>
</details>

<details>
  <summary>Добавление и снятие лайка (включая счетчик лайков)</summary>
  <a href="https://elrouss.github.io/mesto/">
    <img width="500" src="" >
  </a>
</details>

<details>
  <summary>Удаление карточки с модальным окном подтверждения действия</summary>
  <a href="https://elrouss.github.io/mesto/">
    <img width="500" src="" >
  </a>
</details>

<details>
  <summary>Модальное окно с увеличенной фотографией карточки</summary>
  <a href="https://elrouss.github.io/mesto/">
    <img width="500" src="" >
  </a>
</details>

<details>
  <summary>Открытие и закрытие модальных окон (по кнопке, оверлею и клавише "Escape")</summary>
  <a href="https://elrouss.github.io/mesto/">
    <img width="500" src="" >
  </a>
</details>

<details>
  <summary>Спиннеры загрузки</summary>
  <a href="https://elrouss.github.io/mesto/">
    <img width="500" src="" >
  </a>
</details>

<details>
  <summary>Валидация форм</summary>
  <a href="https://elrouss.github.io/mesto/">
    <img width="500" src="" >
  </a>
</details>

## 6. Планы по улучшению
1. Реализовать периодическое автоматическое обновление фотогалереи (без блика)
2. Сделать сабмит форм нажатием на клавишу "Enter" (в настоящий момент работает только в случае клика пользоватем по полю формы)
3. Запретить передачу пустых строк в полях форм

<div align="center">
  <a href="https://elrouss.github.io/mesto/">
    <img width="400" alt="Снимок экрана 2022-12-12 в 13 51 47" src="https://user-images.githubusercontent.com/108838349/207027387-903230e6-c5b4-4a36-9950-015b9205b114.png" alt="Американская певица Патти Смит. Снимок сделан ее другом, известным фотографом 20 века">
  </a>
</div>
