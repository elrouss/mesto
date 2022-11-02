// КЛАСС ВАЛИДАЦИИ ФОРМЫ (это валидация только одной формы; в ПР6 функция enableValidation() отвечала за валидацию всех форм)
export class FormValidator {
  constructor(settings, formElement) {
    // Создание ключей объекта
    this._settings = settings;
    this._formElement = formElement;
    // Кладем в this и в других функциях тянем без аргументов
    this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);
  }

  // Метод показа ошибки валидации
  _showInputError(inputElement, errorMessage) {
    // Деструктуризация (сокращение длинных записей далее по коду, избавление от дублирования строк):
    // Достаем из объекта settings значения свойств с названными ключами и кладем в одноименные переменные
    const { inputErrorClass, errorClass } = this._settings;

    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  }

  // Метод скрытия ошибки валидации
  _hideInputError(inputElement) {
    const { inputErrorClass, errorClass } = this._settings;

    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
  }

  // Методы проверки валидности полей формы
  _isInputValid(inputElement) {
    !inputElement.validity.valid ?
      this._showInputError(inputElement, inputElement.validationMessage) :
        this._hideInputError(inputElement);
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  // Публичный метод отключения кнопки
  disableSubmitButton() {
    const { inactiveButtonClass } = this._settings;

    this._buttonElement.classList.add(inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', true);
  }

  // Метод включения кнопки
  _enableSubmitButton() {
    const { inactiveButtonClass } = this._settings;

    this._buttonElement.classList.remove(inactiveButtonClass);
    this._buttonElement.removeAttribute('disabled');
  }

  // Метод переключения кнопки
  _toggleButtonState() {
    this._hasInvalidInput() ?
      this.disableSubmitButton() :
        this._enableSubmitButton();
  }

  // Обработчики событий
  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isInputValid(inputElement);
        this._toggleButtonState();
      })
    })
  }

  // Публичный метод включения валидации полей формы
  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
    this._setEventListeners();
  }
}
