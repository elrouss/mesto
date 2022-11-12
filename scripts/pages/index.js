import {
  profileName,
  profileJob,
  photoGallery,
  popups,
  popupEditingProfileInfo,
  formEditingProfileInfo,
  nameInput,
  jobInput,
  popupAddingPhotocard,
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

const defaultCardList = new Section({
  data: initialPhotocards,
  renderer: (item) => {
    const photocard = new Card(item, '.gallery-template');
    const photocardElement = photocard.generateCard();

    defaultCardList.addItem(photocardElement);
    },
  },
  photoGallery
)

defaultCardList.renderItems();

import FormValidator from '../components/FormValidator.js';


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
// const handleCardClick = (title, image, alt) => {
//   popupImageCaption.textContent = title;
//   popupImage.src = image;
//   popupImage.alt = alt;

//   openPopup(popupPhotoZoom);
// }

// Функция создания фотокарточки из класса
// const createPhotocard = card => {
//   const photocard = new Card(card, '.gallery-template', handleCardClick);
//   const photocardElement = photocard.generateCard();

//   return photocardElement;
// }

// Добавление новой фотокарточки пользователем и деактивация кнопки submit
// const handleNewPhotocard = evt => {
//   evt.preventDefault();

//   const photocardValue = {
//     name: photocardName.value,
//     link: photocardLink.value
//   }

//   photoGallery.prepend(createPhotocard(photocardValue));
//   evt.target.reset();

//   closePopup(popupAddingPhotocard);
// }

// Создание объекта с классом валидации для попапа редактирования профиля
const validationPopupProfile = new FormValidator(validationSettings, formEditingProfileInfo);
validationPopupProfile.enableValidation();

// Создание объекта с классом валидации для попапа добавления фотокарточки
const validationPopupAddingPhotocard = new FormValidator(validationSettings, formAddingPhotocard);
validationPopupAddingPhotocard.enableValidation();
validationPopupAddingPhotocard.disableSubmitButton();

// ОБРАБОТЧИКИ СОБЫТИЙ
// Загрузка массива карточек
// initialPhotocards.forEach((card) => {
//   photoGallery.append(createPhotocard(card));
// })

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
