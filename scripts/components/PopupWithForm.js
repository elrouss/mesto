import { formAddingPhotocard } from "../utils/constants.js"
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submit) {
    super(popupSelector)
    this._submitForm = submit;
    this._popupForm = formAddingPhotocard;
    this._popupFormInputs = Array.from(this._popup.querySelectorAll('.popup__form-field'));
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
    this._popupForm.reset(); // метод определяется для формы (NB! Для модального окна не работает)
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
