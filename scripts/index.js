import { Card } from './classes/Card.js';
import { FormValidator } from './classes/FormValidator.js';


// ПЕРЕМЕННЫЕ
// Данные профиля пользователя
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

// Шаблон фотокарточки
const photoGallery = document.querySelector('.gallery');

// Модальные окна
const popups = document.querySelectorAll('.popup');

// Модальное окно с формой редактирования информации
const popupEditingProfileInfo = document.querySelector('.popup_type_edit-profile');
// Форма и поля
const formEditingProfileInfo = document.querySelector('.popup__form_type_profile');
const nameInput = document.querySelector('.popup__form-field_type_profile-name');
const jobInput = document.querySelector('.popup__form-field_type_profile-job');

// Модальное окно с формой добавления новой фотокарточки
const popupAddingPhotocard = document.querySelector('.popup_type_add-photocard');
// Поля формы
const formAddingPhotocard = document.querySelector('.popup__form_type_photocards');
const photocardName = document.querySelector('.popup__form-field_type_add-photocard-name');
const photocardLink = document.querySelector('.popup__form-field_type_add-photocard-link');

// Модальное окно с открытием фотографии карточки
const popupPhotoZoom = document.querySelector('.popup_type_image');
const popupImage = document.querySelector('.popup__image');
const popupImageCaption = document.querySelector('.popup__image-caption');

// Кнопки открытия модальных окон
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');


// МАССИВ С НАЧАЛЬНЫМИ КАРТОЧКАМИ
const initialPhotocards = [
  {
    name: 'Фаллох',
    link: 'https://images.unsplash.com/photo-1609109238958-eb5130c99873?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2051&q=80'
  },
  {
    name: 'Чинкве-Терре',
    link: 'https://images.unsplash.com/photo-1592396355679-1e2a094e8bf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    name: 'Мыс Нельсон',
    link: 'https://images.unsplash.com/photo-1434873740857-1bc5653afda8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80'
  },
  {
    name: 'Агра',
    link: 'https://images.unsplash.com/photo-1604917549272-558e388753a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
  },
  {
    name: 'Венеция',
    link: 'https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
  },
  {
    name: 'Абу-Даби',
    link: 'https://images.unsplash.com/photo-1532370436137-d9aaea5dab36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  }
]


// ОБЪЕКТ ВАЛИДАЦИИ
const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-field',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__form-field_type_error',
  errorClass: 'popup__error_visible'
}

// ФУНКЦИИ
// Открытие и закрытие модальных окон
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscape);
}

// Закрытие модальных окон кликом по клавише "Escape"
function handleEscape(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

// Перенос данных пользователя в модальное окно редактирования информации
const getProfileInfo = () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

// Редактирование информации профиля в модальном окне с сохранением значений
const handleFormSubmit = evt => {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup(popupEditingProfileInfo);
}

// Получение на вход данных карточки в попапе карточки
const handleCardClick = (title, image, alt) => {
  popupImageCaption.textContent = title;
  popupImage.src = image;
  popupImage.alt = alt;

  openPopup(popupPhotoZoom);
}

// Функция создания фотокарточки из класса
const createPhotocard = card => {
  const photocard = new Card(card, '.gallery-template', handleCardClick);
  const photocardElement = photocard.generateCard();

  return photocardElement;
}

// Добавление новой фотокарточки пользователем и деактивация кнопки submit
const handleNewPhotocard = evt => {
  evt.preventDefault();

  const photocardValue = {
    name: photocardName.value,
    link: photocardLink.value
  }

  photoGallery.prepend(createPhotocard(photocardValue));
  evt.target.reset();

  closePopup(popupAddingPhotocard);
}

// Создание объекта с классом валидации для попапа редактирования профиля
const validationPopupProfile = new FormValidator(validationSettings, formEditingProfileInfo);
validationPopupProfile.enableValidation();

// Создание объекта с классом валидации для попапа добавления фотокарточки
const validationPopupAddingPhotocard = new FormValidator(validationSettings, formAddingPhotocard);
validationPopupAddingPhotocard.enableValidation();
validationPopupAddingPhotocard.disableSubmitButton();

// ОБРАБОТЧИКИ СОБЫТИЙ
// Загрузка массива карточек
initialPhotocards.forEach((card) => {
  photoGallery.append(createPhotocard(card));
})

// Открытие и закрытие модальных окон по кнопкам и оверлею
profileEditButton.addEventListener('click', () => {
  openPopup(popupEditingProfileInfo);
  getProfileInfo();
  validationPopupProfile.resetValidation();
})

profileAddButton.addEventListener('click', () => {
  openPopup(popupAddingPhotocard);
  validationPopupAddingPhotocard.resetValidation();
})

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')
        || evt.target.classList.contains('popup__closing-button')) {
          closePopup(popup);
      }
  })
})

// Редактирование данных в профиле
formEditingProfileInfo.addEventListener('submit', handleFormSubmit);

// Добавление новой фотокарточки
formAddingPhotocard.addEventListener('submit', handleNewPhotocard);
