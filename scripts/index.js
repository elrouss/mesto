'use strict'

// Открытие и закрытие модального окна редактирования информации в профиле, со значениями со страницы
const popupEditProfileInfo = document.querySelector('.popup');
const openPopupEditProfileInfo = document.querySelector('.profile__edit-button');
const closePopupEditProfileInfo = document.querySelector('.popup__close-button');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector ('.profile__job');
const nameInput = document.querySelector('input[name="profileName"]');
const jobInput = document.querySelector('input[name="profileJob"]');


const togglePopupEditProfileInfo = () => {
  popupEditProfileInfo.classList.toggle('popup_opened');
}

function transferProfileInfo () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

openPopupEditProfileInfo.addEventListener('click', () => {
  togglePopupEditProfileInfo();
  transferProfileInfo();
})

closePopupEditProfileInfo.addEventListener('click', () => {
  togglePopupEditProfileInfo();
})

// Редактирование информации профиля в модальном окне с сохранением значений
// и автоматическим закрытием окна после успешной отправки данных
const formEl = document.querySelector('.popup__form');

function formSubmitHandler (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  togglePopupEditProfileInfo();
}

formEl.addEventListener('submit', formSubmitHandler);
