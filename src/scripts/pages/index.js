import '../../pages/index.css';

import {
  photoGallery,
  popupTypeEditingProfileInfo,
  formEditingProfileInfo,
  nameInput,
  jobInput,
  popupTypeAddingPhotocard,
  formAddingPhotocard,
  popupPhotoZoom,
  profileEditButton,
  profileAddButton,
  initialPhotocards,
  validationSettings
} from '../utils/constants.js';

import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';

// КЛАССЫ
// ФОТОКАРТОЧКИ
// Попап с фотографией карточки
const popupPhotocardImage = new PopupWithImage(popupPhotoZoom);
popupPhotocardImage.setEventListeners(); // слушатели на закрытие попапа

// Функция получения на вход данных карточки в попапе карточки
const handleCardClick = (name, link, alt) => {
  popupPhotocardImage.open(name, link, alt);
}

// Функция отрисовки фотокарточек
const createPhotocard = card => {
  const photocard = new Card(card, '.gallery-template', handleCardClick);
  const photocardElement = photocard.generateCard();

  return photocardElement;
}

// Загрузка галереи фотокарточек на страницу
const photocardsList = new Section({
  data: initialPhotocards,
  renderer: (item) => {
    photocardsList.addItem(createPhotocard(item));
    },
  },
  photoGallery
)
photocardsList.renderItems();


// Попап с добавлением пользователем новых фотокарточек (в data собираются значения инпутов (name))
const submitAddingPhotocardForm = data => {
  const photocardValue = {
    name: data.photocardName,
    link: data.photocardLink
  }

  photocardsList.addItem(createPhotocard(photocardValue));
  popupAddingPhotocard.close(); // закрытие попапа
}

const popupAddingPhotocard = new PopupWithForm(popupTypeAddingPhotocard, submitAddingPhotocardForm);
popupAddingPhotocard.setEventListeners(); // слушатели на закрытие попапа


// Открытие попапа
profileAddButton.addEventListener('click', () => {
  popupAddingPhotocard.open(); // открытие попапа
  validationPopupAddingPhotocard.resetValidation(); // очистка полей валидации
})

// Валидация попапа добавления фотокарточки
const validationPopupAddingPhotocard = new FormValidator(validationSettings, formAddingPhotocard);
validationPopupAddingPhotocard.enableValidation();
validationPopupAddingPhotocard.disableSubmitButton();


// РЕДАКТИРОВАНИЕ ИНФОРМАЦИИ ПРОФИЛЯ В МОДАЛЬНОМ ОКНЕ (С СОХРАНЕНИЕМ ЗНАЧЕНИЙ, ВВОДИМЫХ ПОЛЬЗОВАТЕЛЕМ)
const editingUserInfo = new UserInfo({ profileName: '.profile__name', profileJob: '.profile__job' });

// Сабмит формы редактирования информации о пользователе
const submitEditingUserInfoForm = data => {
  editingUserInfo.setUserInfo(data.profileName, data.profileJob); // изменение информации пользователя на странице при сабмите формы
  popupEditingUserInfoForm.close(); // закрытие попапа после успешного сабмита
}

const popupEditingUserInfoForm = new PopupWithForm(popupTypeEditingProfileInfo, submitEditingUserInfoForm);
popupEditingUserInfoForm.setEventListeners(); // навешивание слушателей на закрытие

const validationPopupProfile = new FormValidator(validationSettings, formEditingProfileInfo);
validationPopupProfile.enableValidation(); // включение валидации полей попапа

profileEditButton.addEventListener('click', () => {
  popupEditingUserInfoForm.open(); // открытие попапа

  // Получение значений со страницы
  const input = editingUserInfo.getUserInfo();
  nameInput.value = input.profileName;
  jobInput.value = input.profileJob;

  validationPopupProfile.resetValidation(); // очистка полей валидации
})
