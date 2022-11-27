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
  validationSettings
} from '../utils/constants.js';

import Api from '../components/Api';
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
  renderer: (item) => {
    photocardsList.addItem(createPhotocard(item));
    },
  },
  photoGallery
)

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
const editingUserInfo = new UserInfo({ profileName: '.profile__name', profileJob: '.profile__job', profileAvatar: '.profile__avatar' });

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

// API
// Информация о пользователе
const apiUserInfo = new Api({
  url: 'https://nomoreparties.co/v1/cohort-54/users/me',
  headers: {authorization: 'ab13029f-8c56-4dec-b26e-24c2c3894c0c',
    'Content-type': 'application/json'}
})

// Информация о пользователе
apiUserInfo.getUserInfo()
  .then((result) => {
    editingUserInfo.setUserInfo(result.name, result.about, result.avatar);
  })
  .catch((error) => {
    console.log(error);
  })

// Фотокарточки
const apiInitialPhotocards = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-54/cards',
  headers: {authorization: 'ab13029f-8c56-4dec-b26e-24c2c3894c0c',
    'Content-type': 'application/json'}
})

// Загрузка галереи на страницу
apiInitialPhotocards.getPhotocards()
  .then((result) => {
    photocardsList.renderItems(result);
  })
  .catch((error) => {
    console.log(error);
  })
  console.log(apiInitialPhotocards)
