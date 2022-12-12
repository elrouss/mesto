<h1 align="center">Проект: "Место"</h1>

<div align="center">
  <a href="https://elrouss.github.io/mesto/">
    <img width="600" alt="Снимок экрана 2022-12-12 в 00 59 03" src="https://user-images.githubusercontent.com/108838349/206931608-5636650f-d971-4993-a0ff-ad0a0bb86619.png">
  </a>
</div>

## Описание проекта
Данная проектная работа составлена в рамках образовательной программы Яндекс.Практикума. Проект представляет собой создание отзывчиво-адаптивного одностраничного сайта с профилем пользователя и фотокарточками - аналог популярных соцсетей.
## Методология и процесс создания
Работа разделена на 6 этапов:

1. Верстка, реализация открытия и закрытия модального окна с возможностью редактирования данных профиля.

2. Выполнены интерактивные элементы страницы: добавление пользователем новых и удаление старых фотокарточек, реализация возможности лайка фотографий и открытие изображений карточек в отдельном модальном окне, решение задачи плавного открытия и закрытия попапов.

3. Валидация полей формы, активация и деактивация кнопок сабмита, закрытие попапов кликом за пределами окна и нажатием на клавишу "Escape".

4. Начало рефакторинга кода путем добавления двух классов - "Card" и "FormValidator", разбиение на модули, директивы import&export.

5. Завершение рефакторинга: структуризация проекта, переписывание функций под 5 новых классов ("Section", "Popup", "PopupWithImage", "PopupWithForm", "UserInfo"), сборка проекта Вебпаком.

6. Подключение к удаленному серверу: загрузка информации о пользователе с возможностью обновления аватара, загрузка фотокарточек (добавление, удаление исключительно своих карточек), добавление счетчика лайков, улучшение UX всех форм.

## Планы по доработке
1. Реализовать периодическое автоматическое обновление фотогалереи (без блика).

2. Сделать сабмит форм нажатием на клавишу "Enter" (в настоящий момент работает только в случае клика пользоватем по полю формы).

3. Запретить передачу пустых строк в полях форм.

## Сборка и запуск
1. npm i - cкачать зависимости
2. npm start - запустить приложение

<div align="center">
  <a href="https://elrouss.github.io/mesto/">
    <img width="400" alt="Снимок экрана 2022-12-12 в 13 51 47" src="https://user-images.githubusercontent.com/108838349/207027387-903230e6-c5b4-4a36-9950-015b9205b114.png">
  </a>
</div>

## Ссылка на проект
https://elrouss.github.io/mesto/

## Ссылка на макет
https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1 (первый этап)
https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?node-id=0%3A1 (второй этап)
https://www.figma.com/file/kRVLKwYG3d1HGLvh7JFWRT/JavaScript.-Sprint-6?node-id=0%3A1 (третий этап)
https://www.figma.com/file/PSdQFRHoxXJFs2FH8IXViF/JavaScript-9-sprint?node-id=0%3A1 (шестой этап)

## Ключевые слова
HTML5, CSS3, JS ES6, Webpack, API, ООП, БЭМ, Figma
## Контактные данные
E-mail: boris_z94@mail.ru, test-zashliapin-b@yandex.ru
