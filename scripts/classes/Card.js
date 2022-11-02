import { popupPhotoZoom, popupImage, popupImageCaption, openPopup  } from '../index.js';


// КЛАСС ФОТОКАРТОЧКИ
export class Card {
  constructor(data, templateSelector) {
    this._title = data.name;
    this._alt = `Название места на фотографии: ${this._title}`;
    this._image = data.link;
    this._templateSelector = templateSelector;
  }

  // Метод получения шаблона разметки из HTML
  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.gallery__item')
    .cloneNode(true);

    return cardElement;
  }

  // Метод переключения состояния кнопки лайка
  _handleButtonLike() {
    this._cardButtonLike.classList.toggle('gallery__item-like-button_active');
  }

  // Метод удаления карточки
  _deleteCard() {
    this._element.remove();
  }

  // Метод переноса данных из карточки в попап карточки
  _getCardsItems = () => {
    popupImage.src = this._image;
    popupImage.alt = this._alt;
    popupImageCaption.textContent = this._title;
  }

  // Метод открытия попапа с картинкой
  _openPopupImage() {
    popupImage.src = '';
    openPopup(popupPhotoZoom);
    this._getCardsItems();
  }

  // Обработчики событий
  _setEventListeners() {
    // Лайки
    this._cardButtonLike = this._element.querySelector('.gallery__item-like-button');
    this._cardButtonLike.addEventListener('click', () => {
      this._handleButtonLike();
    })

    // Удаление карточки
    this._cardButtonDeletion = this._element.querySelector('.gallery__item-delete-button');
    this._cardButtonDeletion.addEventListener('click', () => {
      this._deleteCard();
    })

    // Открытие попапа кликом по картинке
    this._cardImage = this._element.querySelector('.gallery__item-image');
    this._cardImage.addEventListener('click', () => {
      this._openPopupImage();
    })
  }

  // Публичный метод создания карточки, возвращающий полностью работоспособный и наполненный данными элемент карточки
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._cardTitle = this._element.querySelector('.gallery__item-title');
    this._cardTitle.textContent = this._title;

    this._cardImage.src = this._image;
    this._cardImage.alt = this._alt;

    return this._element;
  }
}
