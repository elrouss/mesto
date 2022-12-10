// ПЕРЕМЕННЫЕ
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

// Модальное окно с подтверждением удаления фотокарточки
export const popupTypeConfirmationDeletion = document.querySelector('.popup_type_confirmation-deletion');

// Модальное окно с открытием фотографии карточки
export const popupPhotoZoom = document.querySelector('.popup_type_image');

// Кнопки открытия модальных окон
export const profileEditButton = document.querySelector('.profile__edit-button');
export const profileAddButton = document.querySelector('.profile__add-button');


// ОБЪЕКТЫ
// ВАЛИДАЦИЯ
export const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-field',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__form-field_type_error',
  errorClass: 'popup__error_visible'
}

// API
export const apiSettings = {
  baseUrl: 'https://nomoreparties.co/v1/cohort-54',
  headers: {
    authorization: 'ab13029f-8c56-4dec-b26e-24c2c3894c0c',
    'Content-type': 'application/json'
  }
}
