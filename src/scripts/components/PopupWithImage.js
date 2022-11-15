import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._title = this._popup.querySelector('.popup__image-caption');
    this._image = this._popup.querySelector('.popup__image');
    this._alt = this._popup.querySelector('.popup__image');
  }

  // Перезаписанный метод открытия попапа со вставкой изображения и подписью к нему, альтом
  open(name, link, alt) {
    super.open();
    this._title.textContent = name;
    this._image.src = link;
    this._alt.alt = alt;
  }
}
