'use strict'

// Открытие и закрытие модального окна редактирования информации в профиле
const popupEditProfileInfo = document.querySelector('.popup');
const openPopupEditProfileInfo = document.querySelector('.profile__edit-button');
const closePopupEditProfileInfo = document.querySelector('.popup__close-icon');
const closeSubmitButtonPopupEditProfileInfo = document.querySelector('.popup__submit-button');

const togglePopupEditProfileInfo = () => {
  popupEditProfileInfo.classList.toggle('popup_opened');
}

openPopupEditProfileInfo.addEventListener('click', () => {
  togglePopupEditProfileInfo();
})

closePopupEditProfileInfo.addEventListener('click', () => {
  togglePopupEditProfileInfo();
})

closeSubmitButtonPopupEditProfileInfo.addEventListener('click', () => {
  togglePopupEditProfileInfo();
})

// Модальное окно со значениями на странице
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector ('.profile__job');
const formEl = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__field_place_name');
const jobInput = document.querySelector('.popup__field_place_job');

function transferProfileInfo () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

openPopupEditProfileInfo.addEventListener('click', transferProfileInfo);

// Редактирование информации профиля в модальном окне с сохранением значения
function formSubmitHandler (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

}

formEl.addEventListener('submit', formSubmitHandler);

