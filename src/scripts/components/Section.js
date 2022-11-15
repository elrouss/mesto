// КЛАСС ПОЛУЧЕНИЯ ГОТОВОЙ РАЗМЕТКИ И ВСТАВКИ ЕЕ В DOM
export default class Section {
  constructor({ data, renderer }, containerElement) {
    this._initialArray = data; // Массив с данными карточек
    this._renderer = renderer; // Отрисовка
    this._container = containerElement; // Контейнер для вставки элементов разметки
  }

  // Метод приема DOM-элемента и добавления его в контейнер
  addItem(element) {
    this._container.prepend(element);
  }

  // Метод отрисовки всех элементов, которую возвращает Card
  renderItems() {
    this._initialArray.reverse().forEach((item) => {
      this._renderer(item);
    })
  }
}
