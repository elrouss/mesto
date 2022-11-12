// КЛАСС ПОЛУЧЕНИЯ ГОТОВОЙ РАЗМЕТКИ И ВСТАВКИ ЕЕ В DOM
export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._initialArray = data; // Массив с данными карточек
    this._renderer = renderer; // Отрисовка
    this._container = containerSelector; // Контейнер для вставки элементов разметки
  }

  // Метод удаления всего содержимого поля
  clear() {
    this._container.innerHTML = '';
  }

  // Метод приема DOM-элемента и добавления его в контейнер
  addItem(element) {
    this._container.append(element);
  }

  // Метод отрисовки всех элементов, которую возвращает Card
  renderItems() {
    this.clear();

    this._initialArray.forEach((item) => {
      this._renderer(item);
    })
  }
}
