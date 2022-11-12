import {
  profileName,
  profileJob,
  photoGallery,
  popups,
  popupEditingProfileInfo,
  formEditingProfileInfo,
  nameInput,
  jobInput,
  // popupAddingPhotocard,
  formAddingPhotocard,
  photocardName,
  photocardLink,
  popupPhotoZoom,
  popupImage,
  popupImageCaption,
  profileEditButton,
  profileAddButton,
  initialPhotocards,
  validationSettings
} from '../utils/constants.js';

import Card from '../components/Card.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import FormValidator from '../components/FormValidator.js';

// ВЫЗОВЫ КЛАССОВ
// Модальные окна
const popupAddingPhotocard = new Popup('.popup_type_add-photocard');
popupAddingPhotocard.setEventListeners();

// ФУНКЦИИ
// Перенос данных пользователя в модальное окно редактирования информации
// const getProfileInfo = () => {
//   nameInput.value = profileName.textContent;
//   jobInput.value = profileJob.textContent;
// }

// Редактирование информации профиля в модальном окне с сохранением значений
const handleFormSubmit = evt => {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup(popupEditingProfileInfo);
}

// Получение готовой разметки фотокарточки и вставка ее в DOM
const photocardsList = new Section({
  data: initialPhotocards,
  renderer: (item) => {
    const photocard = new Card(item, '.gallery-template');
    const photocardElement = photocard.generateCard();

    photocardsList.addItem(photocardElement);
    },
  },
  photoGallery
)
photocardsList.renderItems();

// Получение на вход данных карточки в попапе карточки
const handleCardClick = (title, image, alt) => {
  popupImageCaption.textContent = title;
  popupImage.src = image;
  popupImage.alt = alt;

  // openPopup(popupPhotoZoom);
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

  // closePopup(popupAddingPhotocard);
}

// Создание объекта с классом валидации для попапа редактирования профиля
const validationPopupProfile = new FormValidator(validationSettings, formEditingProfileInfo);
validationPopupProfile.enableValidation();

// Создание объекта с классом валидации для попапа добавления фотокарточки
const validationPopupAddingPhotocard = new FormValidator(validationSettings, formAddingPhotocard);
validationPopupAddingPhotocard.enableValidation();
validationPopupAddingPhotocard.disableSubmitButton();

// ОБРАБОТЧИКИ СОБЫТИЙ
// Открытие и закрытие модальных окон по кнопкам и оверлею
// profileEditButton.addEventListener('click', () => {
//   // openPopup(popupEditingProfileInfo);
//   getProfileInfo();
//   validationPopupProfile.resetValidation();
// })

profileAddButton.addEventListener('click', () => {
  popupAddingPhotocard.open();
  validationPopupAddingPhotocard.resetValidation();
})

// Редактирование данных в профиле
formEditingProfileInfo.addEventListener('submit', handleFormSubmit);

// Добавление новой фотокарточки
formAddingPhotocard.addEventListener('submit', handleNewPhotocard);
