import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupElement, submit) {
    super(popupElement);
    this._submitForm = submit;

    this._popupForm = this._popup.querySelector('.popup__form');
    this._popupFormInputs = Array.from(this._popup.querySelectorAll('.popup__form-field'));

    this._popupSubmitButton = this._popup.querySelector('.popup__submit-button');
    this._popupSubmitButtonOriginalText = this._popupSubmitButton.textContent;
  }

  // Геттер сбора значений всех полей формы (создание пустого объекта, проход по инпутам и заполнение объекта свойствами)
  _getInputValues() {
    this._popupFormInputsValues = new Object;
    this._popupFormInputs.forEach((input) => {
      this._popupFormInputsValues[input.name] = input.value;
    })
    return this._popupFormInputsValues;
  }

  // Метод сбрасывания формы при закрытии попапа
  close() {
    super.close();
    this._popupForm.reset(); // метод определяется для формы
  }

  // Уведомление пользователя о процессе загрузки
  renderLoading(isLoading) {
    isLoading
    ? this._popupSubmitButton.textContent = 'Сохранение...'
    : this._popupSubmitButton.textContent = this._popupSubmitButtonOriginalText;
  }

  // Метод установки обработчиков событий (добавление обработчиков клика иконке закрытия и сабмиту формы)
  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._submitForm(this._getInputValues());
    })
  }
}
