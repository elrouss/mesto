import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._popupForm = this._popup.querySelector('.popup__form');
  }

  // Подменяет метод submitForm
  submitDeletion(submitCardDeletion) {
    this._submitForm = submitCardDeletion;
  };

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._submitForm(this);
    })
  }
}
