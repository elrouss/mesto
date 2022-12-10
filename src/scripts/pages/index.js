import '../../pages/index.css';

import {
  photoGallery,
  popupTypeEditingProfileInfo,
  formEditingProfileInfo,
  nameInput,
  jobInput,
  popupTypeAddingPhotocard,
  formAddingPhotocard,
  popupTypeConfirmationDeletion,
  popupPhotoZoom,
  profileEditButton,
  profileAddButton,
  validationSettings,
  apiSettings
} from '../utils/constants.js';

import Api from '../components/Api';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';

// TODO: сделать автоматическое обновление страницы

// API
// Создание универсального класса, на котором вызываются методы, с общими данными во избежание дублирования кода
const api = new Api(apiSettings);

// Получение информации о пользователе с сервера
// id пользователя
let userId;

api.getUserInfo()
  .then((user) => {
    editingUserInfo.setUserInfo(user.name, user.about, user.avatar); // "name" и "about" соответствуют ключам в Api

    userId = user._id;
  })
  .catch((error) => {
    console.log(`Ошибка при получении информации о пользователе: ${error}`);
  }
)

// Загрузка галереи на страницу
api.getPhotocards()
  .then((photocards) => {
    photocardsList.renderItems(photocards);
  })
  .catch((error) => {
    console.log(`Ошибка при загрузке галереи: ${error}`);
  }
)


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
  const photocard = new Card(card, userId, '.gallery-template', handleCardClick, (id) => {
    popupConfirmationDeletion.open();
    popupConfirmationDeletion.submitDeletion(() => {
    api.deletePhotocard(id);
    photocard.deleteCard();
    popupConfirmationDeletion.close();
    }); // TODO: реализовать удаление по нажатию на Enter NB! Четвертая функция занимается удаление карточек
  },
  (id) => {
    if (photocard.isLiked()) {
      api.deletePhotocardLike(id)
      .then ((response) => {
        photocard.showPhotocardLikes(response.likes);
      })
    } else {
      api.addPhotocardLike(id)
      .then ((response) => {
        photocard.showPhotocardLikes(response.likes);
      })
    }
  });
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
  // Добавление новой карточки в галерею
  api.addNewPhotocard(data.photocardName, data.photocardLink)
    .then((data) => {
      photocardsList.addItem(createPhotocard(data)); // owner._id
    })
    .catch((error) => {
      console.log(`Ошибка при добавление новой карточки: ${error}`);
    })
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

// Попап с подтверждением удаления фотокарточки
const popupConfirmationDeletion = new PopupWithConfirmation(popupTypeConfirmationDeletion); // Здесь не передается функция удаления карточки
popupConfirmationDeletion.setEventListeners();


// РЕДАКТИРОВАНИЕ ИНФОРМАЦИИ ПРОФИЛЯ В МОДАЛЬНОМ ОКНЕ (С СОХРАНЕНИЕМ ЗНАЧЕНИЙ, ВВОДИМЫХ ПОЛЬЗОВАТЕЛЕМ)
const editingUserInfo = new UserInfo({ profileName: '.profile__name', profileJob: '.profile__job', profileAvatar: '.profile__avatar' });

// Сабмит формы редактирования информации о пользователе (данные собираются из полей формы)
const submitEditingUserInfoForm = data => {
  // Изменение информации пользователя на странице при сабмите формы
  api.editUserInfo(data.profileName, data.profileJob)
  .then((user) => {
    editingUserInfo.setUserInfo(user.name, user.about); // "name" и "about" соответствуют ключам в Api
    popupEditingUserInfoForm.close(); // закрытие попапа после успешного сабмита
  })
  .catch((error) => {
    console.log(`Ошибка при редактировании информации о пользователе: ${error}`);
  })
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
