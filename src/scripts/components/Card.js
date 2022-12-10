// КЛАСС ФОТОКАРТОЧКИ
export default class Card {
  constructor(data, userId, templateSelector, handleCardClick, confirmCardDeletion, handleLikeClick) { // Передача названия, ссылки, селектора шаблона и слушателя карточки
    this._title = data.name;
    this._alt = `Описание фотографии: ${this._title}`;
    this._image = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._ownerId = data.owner._id;

    this._userId = userId;

    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._confirmCardDeletion = confirmCardDeletion;
    this._handleLikeClick = handleLikeClick;
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

  // Проверка состояния лайков
  isLiked() {
    const userHasLikedCard = this._likes.some((user) => user._id === this._userId);
    return userHasLikedCard;
  }

  // Метод переключения состояния кнопки лайка
  _paintOverLikeButton() {
    this._cardButtonLike.classList.add('gallery__item-like-button_active');
  }

  _cleanPaintLikeButton() {
    this._cardButtonLike.classList.remove('gallery__item-like-button_active');
  }

  // Отображение количества лайков
  showPhotocardLikes(newLikes) {
    this._likes = newLikes;

    this._likesCounter = this._element.querySelector('.gallery__item-likes-counter');
    if (this._likes.length > 0) {
      this._likesCounter.textContent = this._likes.length;
      this._likesCounter.style.display = 'inline-block';
    } else {
      this._likesCounter.style.display = 'none';
    }

    if (this.isLiked()) {
      this._paintOverLikeButton()
    } else {
      this._cleanPaintLikeButton();
    }
  }

  // Метод удаления карточки
  deleteCard() {
    this._element.remove();
  }

  // Обработчики событий
  _setEventListeners() {
    // Лайки
    this._cardButtonLike = this._element.querySelector('.gallery__item-like-button');
    this._cardButtonLike.addEventListener('click', () => {
      this._handleLikeClick(this._id);
    })

    // Удаление карточки
    this._cardButtonDeletion = this._element.querySelector('.gallery__item-delete-button');
    this._cardButtonDeletion.addEventListener('click', () => {
      this._confirmCardDeletion(this._id);
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

    this.showPhotocardLikes(this._likes);

    if (this._ownerId !== this._userId) {
      this._cardButtonDeletion.style.display = 'none';
    }

    return this._element;
  }
}
