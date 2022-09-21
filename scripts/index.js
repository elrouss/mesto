'use strict';

// МОДАЛЬНЫЕ ОКНА
// Открытие и закрытие модальных окон
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');

const popup = document.querySelectorAll('.popup');
const popupEditingProfileInfo = document.querySelector('.popup_type_edit-profile');
const closingButtonPopupEditProfileInfo = document.querySelector('.popup__closing-button_type_edit-profile');
const popupAddingPhotocard = document.querySelector('.popup_type_add-photocard');
const closingButtonPopupAddPhotocard = document.querySelector('.popup__closing-button_type_add-photocard');
const popupPhotoZoom = document.querySelector('.popup_type_image');
const closingButtonPopupPhotoZoom = document.querySelector('.popup__closing-button_type_image');

const openPopup = popup => {
  popup.classList.add('popup_opened');
}

const closePopup = popup => {
  popup.classList.remove('popup_opened');
}

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const nameInput = document.querySelector('.popup__field_type_profile-name');
const jobInput = document.querySelector('.popup__field_type_profile-job');

const transferProfileInfo = () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

profileEditButton.addEventListener('click', () => {
  openPopup(popupEditingProfileInfo);
  transferProfileInfo();
})

closingButtonPopupEditProfileInfo.addEventListener('click', () => {
  closePopup(popupEditingProfileInfo);
})

profileAddButton.addEventListener('click', () => {
  openPopup(popupAddingPhotocard);
})

closingButtonPopupAddPhotocard.addEventListener('click', () => {
  closePopup(popupAddingPhotocard);
})

// Редактирование информации профиля в модальном окне с сохранением значений
// и автоматическим закрытием окна после успешной отправки данных
const formEl = document.querySelector('.popup__form_type_profile');

const formSubmitHandler = evt => {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  openPopup(popupEditingProfileInfo);
  closePopup(popupEditingProfileInfo);
}

formEl.addEventListener('submit', formSubmitHandler);

// ГАЛЕРЕЯ ФОТОКАРТОЧЕК
// Загрузка фотокарточек на сайт из массива, лайки, удаление фотокарточек пользователем
const photoGallery = document.querySelector('.gallery');
const photocardTemplate = document.querySelector('#gallery-template').content;

initialPhotocards.forEach((item) => {
  const photocardElement = photocardTemplate.cloneNode(true);

  photocardElement.querySelector('.gallery__item-title').textContent = item.name;
  photocardElement.querySelector('.gallery__item-image').alt = item.name;
  photocardElement.querySelector('.gallery__item-image').src = item.link;

  // Лайки
  photocardElement.querySelector('.gallery__item-like-button').addEventListener('click', (evt) => {
    evt.target.classList.toggle('gallery__item-like-button_active');
  })

  // Удаление фотокарточки пользователем
  photocardElement.querySelector('.gallery__item-delete-button').addEventListener('click', (evt) => {
    const currentPhotocard = evt.target.closest('.gallery__item');
    currentPhotocard.remove();
  })

  // Zoom фотографии
  // Открытие и закрытие модального окна, трансляции фотографии и заголовка фотокарточки
  const transferPhotocardsItems = evt => {

    const popupImage = document.querySelector('.popup__image');
    const popupImageCaption = document.querySelector('.popup__image-caption');

    popupImage.src = evt.target.src;
    popupImageCaption.textContent = evt.target.alt;
  }

  photocardElement.querySelector('.gallery__item-image').addEventListener('click', (evt) => {
    openPopup(popupPhotoZoom);
    transferPhotocardsItems(evt);
  })

  closingButtonPopupPhotoZoom.addEventListener('click', () => {
    closePopup(popupPhotoZoom);
  })

  photoGallery.append(photocardElement);
})

// Добавление новых фотокарточек пользователем, лайки, Zoom, удаление фотокарточки пользователем
const photocardName = document.querySelector('.popup__field_type_photocard-name'); // Инпут формы имени картинки в карточке
const photocardLink = document.querySelector('.popup__field_type_photocard-link'); // Инпут формы ссылки картинки в карточке
const addingPhotocardButton = document.querySelector('.popup__submit-button_type_add'); // Кнопка сабмита карточки

const addPhotocard = (imageValue, titleValue) => {
  const photocardElement = photocardTemplate.cloneNode(true);

  photocardElement.querySelector('.gallery__item-image').src = titleValue;
  photocardElement.querySelector('.gallery__item-title').textContent = imageValue;

  photocardElement.querySelector('.gallery__item-like-button').addEventListener('click', (evt) => {
  evt.target.classList.toggle('gallery__item-like-button_active');
  })

  photocardElement.querySelector('.gallery__item-delete-button').addEventListener('click', (evt) => {
    const currentPhotocard = evt.target.closest('.gallery__item');
    currentPhotocard.remove();
  })

  const transferPhotocardsItems = evt => {

    const popupImage = document.querySelector('.popup__image');
    const popupImageCaption = document.querySelector('.popup__image-caption');

    popupImage.src = evt.target.src;
    popupImageCaption.textContent = evt.target.alt;
  }

  photocardElement.querySelector('.gallery__item-image').addEventListener('click', (evt) => {
    openPopup(popupPhotoZoom);
    transferPhotocardsItems(evt);
  })

  closingButtonPopupPhotoZoom.addEventListener('click', () => {
    closePopup(popupPhotoZoom);
  })

  photoGallery.prepend(photocardElement);
}

addingPhotocardButton.addEventListener('click', () => {
  addPhotocard(photocardName.value, photocardLink.value);

  photocardName.value = '';
  photocardLink.value = '';

  closePopup(popupAddingPhotocard);
})
