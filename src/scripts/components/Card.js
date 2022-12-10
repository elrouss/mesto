// КЛАСС ФОТОКАРТОЧКИ
export default class Card {
  constructor({ name, link, likes }, templateSelector, handleCardClick) { // Передача названия, ссылки, селектора шаблона и слушателя карточки
    this._title = name;
    this._alt = `Название места на фотографии: ${this._title}`;
    this._image = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._likes = likes;
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

  // Отображение количества лайков
  _showPhotocardLikes() {
    this._likesCounter = this._element.querySelector('.gallery__item-likes-counter');
    if (this._likes.length > 0) {
      this._likesCounter.textContent = this._likes.length;
    }
  }

  // Метод открытия попапа с подтверждением удаления карточки
  // _confirmCardDeletion() {
  //   this._cardButtonDeletion = this._element.querySelector('.gallery__item-delete-button');
  //   // this._cardButtonDeletion.addEventListener('click', () => {
  //   //   this._deleteCard();
  //   // })
  // }

  // Метод удаления карточки
  _deleteCard() {
    this._element.remove();
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

    // Получение на вход данных карточки
    this._cardImage = this._element.querySelector('.gallery__item-image');
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._title, this._image, this._alt);
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

    this._showPhotocardLikes();

    return this._element;
  }
}
