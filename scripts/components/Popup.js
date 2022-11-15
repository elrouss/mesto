export default class Popup {
  constructor(popupElement) {
    this._popup = popupElement; // Селектор попапа
  }

  // Метод открытия попапа
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  // Метод закрытия попапа
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  // Метод закрытия попапа клавишей "Escape" (чтобы не потерять контекст, переделано на стрелочную функцию)
  _handleEscClose = evt => {
    if (evt.key === 'Escape') this.close();
  }

  // Метод установки обработчиков событий
  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__closing-button'))
      this.close();
    })
  }
}
