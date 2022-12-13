import '../../pages/index.css';

import {
  photoGallery,
  popupTypeEditingProfileInfo,
  formEditingProfileInfo,
  nameInput,
  jobInput,
  profileEditAvatar,
  popupTypeEditingUserAvatar,
  formEditingUserAvatar,
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

// API
// Создание универсального класса, на котором вызываются методы, с общими данными во избежание дублирования кода
const api = new Api(apiSettings);

// id пользователя
let userId;

// Объединение в один Promise, для того чтобы карточки отрисовывались только после получения id для корректного отображения корзины удаления
Promise.all([api.getUserInfo(), api.getPhotocards()])
.then(([user, photocards]) => {
  userId = user._id;
  userInfo.setUserInfo(user.name, user.about); // "name", "about" и "avatar" соответствуют ключам в Api
  userInfo.setUserAvatar(user.avatar);

  photocardsList.renderItems(photocards);
})
.catch((error) => {
  console.log(`Ошибка в процессе загрузки данных пользователя и галереи: ${error}`);
})


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
  const photocard = new Card(card, userId, '.gallery-template', handleCardClick,
  (id) => {
    popupConfirmationDeletion.open();
    popupConfirmationDeletion.submitDeletion(() => {
    api.deletePhotocard(id)
    .then((card) => {
      photocard.deleteCard(card);
      popupConfirmationDeletion.close();
    })
    .catch((error) => {
      console.log(`Ошибка при удалении карточки: ${error}`);
    })
    })
  },
  (id) => {
    if (photocard.isLiked()) {
      api.deletePhotocardLike(id)
      .then ((response) => {
        photocard.showPhotocardLikes(response.likes);
      })
      .catch((error) => {
        console.log(`Ошибка при отображении лайков карточки: ${error}`);
      })
    } else {
      api.addPhotocardLike(id)
      .then ((response) => {
        photocard.showPhotocardLikes(response.likes);
      })
      .catch((error) => {
        console.log(`Ошибка при отображении лайков карточки: ${error}`);
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
  popupAddingPhotocard.renderLoading(true);

  // Добавление новой карточки в галерею
  api.addNewPhotocard(data.photocardName, data.photocardLink)
  .then((data) => {
    photocardsList.addItem(createPhotocard(data)); // owner._id
    popupAddingPhotocard.close();
  })
  .catch((error) => {
    console.log(`Ошибка при добавление новой карточки: ${error}`);
  })
  .finally(() => {
    popupAddingPhotocard.renderLoading(false);
  })
}

const popupAddingPhotocard = new PopupWithForm(popupTypeAddingPhotocard, submitAddingPhotocardForm);
popupAddingPhotocard.setEventListeners(); // слушатели на закрытие попапа


// Открытие попапа
profileAddButton.addEventListener('click', () => {
  popupAddingPhotocard.open(); // открытие попапа
  
  validationPopupAddingPhotocard.resetValidation(); // очистка полей валидации
  validationPopupAddingPhotocard.disableSubmitButton();
})

// Валидация попапа добавления фотокарточки
const validationPopupAddingPhotocard = new FormValidator(validationSettings, formAddingPhotocard);
validationPopupAddingPhotocard.enableValidation();

// Попап с подтверждением удаления фотокарточки
const popupConfirmationDeletion = new PopupWithConfirmation(popupTypeConfirmationDeletion); // Здесь не передается функция удаления карточки
popupConfirmationDeletion.setEventListeners();


// РЕДАКТИРОВАНИЕ ИНФОРМАЦИИ ПРОФИЛЯ В МОДАЛЬНОМ ОКНЕ (С СОХРАНЕНИЕМ ЗНАЧЕНИЙ, ВВОДИМЫХ ПОЛЬЗОВАТЕЛЕМ)
const userInfo = new UserInfo({ profileName: '.profile__name', profileJob: '.profile__job', profileAvatar: '.profile__avatar' });

// Сабмит формы редактирования информации о пользователе (данные собираются из полей формы)
const submitEditingUserInfoForm = data => {
  popupEditingUserInfoForm.renderLoading(true);

  // Изменение информации пользователя на странице при сабмите формы
  api.editUserInfo(data.profileName, data.profileJob)
  .then((user) => {
    userInfo.setUserInfo(user.name, user.about); // "name" и "about" соответствуют ключам в Api
    popupEditingUserInfoForm.close(); // закрытие попапа после успешного сабмита
  })
  .catch((error) => {
    console.log(`Ошибка при редактировании информации о пользователе: ${error}`);
  })
  .finally(() => {
    popupEditingUserInfoForm.renderLoading(false);
  })
}

const popupEditingUserInfoForm = new PopupWithForm(popupTypeEditingProfileInfo, submitEditingUserInfoForm);
popupEditingUserInfoForm.setEventListeners(); // навешивание слушателей на закрытие

const validationPopupProfile = new FormValidator(validationSettings, formEditingProfileInfo);
validationPopupProfile.enableValidation(); // включение валидации полей попапа

profileEditButton.addEventListener('click', () => {
  popupEditingUserInfoForm.open(); // открытие попапа

  // Получение значений со страницы
  const input = userInfo.getUserInfo();
  nameInput.value = input.profileName;
  jobInput.value = input.profileJob;

  validationPopupProfile.resetValidation(); // очистка полей валидации
})

// Сабмит формы с обновлением аватара
const submitEditingUserAvatar = data => {
  popupEditingUserAvatar.renderLoading(true);

  api.editUserAvatar(data.profileAvatar)
  .then((user) => {
    userInfo.setUserAvatar(user.avatar);
    popupEditingUserAvatar.close();
  })
  .catch((error) => {
    console.log(`Ошибка при обновлении аватара пользователя: ${error}`);
  })
  .finally(() => {
    popupEditingUserAvatar.renderLoading(false);
  })
}

const popupEditingUserAvatar = new PopupWithForm(popupTypeEditingUserAvatar, submitEditingUserAvatar);
popupEditingUserAvatar.setEventListeners();

const validationPopupEditingUserAvatar = new FormValidator(validationSettings, formEditingUserAvatar);
validationPopupEditingUserAvatar.enableValidation();

profileEditAvatar.addEventListener('click', () => {
  popupEditingUserAvatar.open();

  validationPopupEditingUserAvatar.resetValidation();
  validationPopupEditingUserAvatar.disableSubmitButton();
})
