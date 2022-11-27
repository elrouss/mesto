// КЛАСС ПОЛУЧЕНИЯ ГОТОВОЙ РАЗМЕТКИ И ВСТАВКИ ЕЕ В DOM
export default class Section {
  constructor({ renderer }, containerElement) {
    this._renderer = renderer; // Отрисовка
    this._container = containerElement; // Контейнер для вставки элементов разметки
  }

  // Метод приема DOM-элемента и добавления его в контейнер
  addItem(element) {
    this._container.prepend(element);
  }

  // Метод отрисовки всех элементов, которую возвращает Card
  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    })
  }
}
