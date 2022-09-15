'use strict'

// МОДАЛЬНЫЕ ОКНА
// Открытие и закрытие модальных окон
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');

const popup = document.querySelectorAll('.popup');
const popupEditingProfileInfo = document.querySelector('.popup_type_edit-profile');
const closingButtonPopupEditProfileInfo = document.querySelector('.popup__closing-button_type_edit-profile');
const popupAddingPhotocard = document.querySelector('.popup_type_add-photocard');
const closingButtonPopupAddPhotocard = document.querySelector('.popup__closing-button_type_add-photocard');

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
};

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const nameInput = document.editProfileInfo.profileName;
const jobInput = document.editProfileInfo.profileJob;

const transferProfileInfo = () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
};

profileEditButton.addEventListener('click', () => {
  openPopup(popupEditingProfileInfo);
  transferProfileInfo();
});

closingButtonPopupEditProfileInfo.addEventListener('click', () => {
  closePopup(popupEditingProfileInfo);
});

profileAddButton.addEventListener('click', () => {
  openPopup(popupAddingPhotocard);
});

closingButtonPopupAddPhotocard.addEventListener('click', () => {
  closePopup(popupAddingPhotocard);
});

// Редактирование информации профиля в модальном окне с сохранением значений
// и автоматическим закрытием окна после успешной отправки данных
const formEl = document.querySelector('.popup__form');

function formSubmitHandler (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  openPopup(popupEditingProfileInfo);
};

formEl.addEventListener('submit', formSubmitHandler);

// ГАЛЕРЕЯ ФОТОКАРТОЧЕК
const photoGallery = document.querySelector('.gallery');
const photocardTemplate = document.querySelector('#gallery-template').content;

const initialPhotocards = [
  {
    name: 'Фаллох',
    link: 'https://images.unsplash.com/photo-1609109238958-eb5130c99873?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2051&q=80',
    alt: 'Водопад Фаллох в Шотландии'
  },
  {
    name: 'Чинкве-Терре',
    link: 'https://images.unsplash.com/photo-1592396355679-1e2a094e8bf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    alt: 'Национальный парк "Чинкве-Терре" ("Пять земель") в Италии'
  },
  {
    name: 'Мыс Нельсон',
    link: 'https://images.unsplash.com/photo-1434873740857-1bc5653afda8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80',
    alt: 'Маяк на мысе Нельсон в Австралии'
  },
  {
    name: 'Агра',
    link: 'https://images.unsplash.com/photo-1604917549272-558e388753a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    alt: 'Тадж-Махал в Агре'
  },
  {
    name: 'Венеция',
    link: 'https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    alt: 'Канал в Венеции'
  },
  {
    name: 'Абу-Даби',
    link: 'https://images.unsplash.com/photo-1532370436137-d9aaea5dab36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    alt: 'Дворец Каср Аль-Ватан в Абу-Даби'
  }
];

initialPhotocards.forEach((item) => {
  const photocardElement = photocardTemplate.cloneNode(true);

  photocardElement.querySelector('.gallery__item-image').src = item.link; // Обращение по селектору выполняется дважды
  photocardElement.querySelector('.gallery__item-image').alt = item.alt;  // Нужно вынести в отдельную константу
  photocardElement.querySelector('.gallery__item-title').textContent = item.name;

  photoGallery.append(photocardElement);
});
