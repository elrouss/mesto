// ПЕРЕМЕННЫЕ
// Данные профиля пользователя
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');

// Контейнер для добавления фотокарточек
export const photoGallery = document.querySelector('.gallery');

// Модальное окно с формой редактирования информации
export const popupTypeEditingProfileInfo = document.querySelector('.popup_type_edit-profile');
// Форма и поля
export const formEditingProfileInfo = document.querySelector('.popup__form_type_profile');
export const nameInput = document.querySelector('.popup__form-field_type_profile-name');
export const jobInput = document.querySelector('.popup__form-field_type_profile-job');

// Модальное окно с формой добавления новой фотокарточки
export const popupTypeAddingPhotocard = document.querySelector('.popup_type_add-photocard');
// Поля формы
export const formAddingPhotocard = document.querySelector('.popup__form_type_photocards');
export const photocardName = document.querySelector('.popup__form-field_type_add-photocard-name');
export const photocardLink = document.querySelector('.popup__form-field_type_add-photocard-link');

// Модальное окно с открытием фотографии карточки
export const popupPhotoZoom = document.querySelector('.popup_type_image');

// Кнопки открытия модальных окон
export const profileEditButton = document.querySelector('.profile__edit-button');
export const profileAddButton = document.querySelector('.profile__add-button');


// МАССИВ С НАЧАЛЬНЫМИ КАРТОЧКАМИ
export const initialPhotocards = [
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
export const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-field',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__form-field_type_error',
  errorClass: 'popup__error_visible'
}
