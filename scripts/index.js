// ПЕРЕМЕННЫЕ
// Данные профиля пользователя
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

// Шаблон фотокарточки
const photoGallery = document.querySelector('.gallery');
const photocardTemplate = document.querySelector('.gallery-template').content;

// Модальные окна
const popups = document.querySelectorAll('.popup');

// Модальное окно с формой редактирования информации
const popupEditingProfileInfo = document.querySelector('.popup_type_edit-profile');
// Форма и поля
const formEl = document.querySelector('.popup__form_type_profile');
const nameInput = document.querySelector('.popup__form-field_type_profile-name');
const jobInput = document.querySelector('.popup__form-field_type_profile-job');

// Модальное окно с формой добавления новой фотокарточки
const popupAddingPhotocard = document.querySelector('.popup_type_add-photocard');
// Поля формы
const formAddingPhotocard = document.querySelector('.popup__form_type_photocards');
const photocardName = document.querySelector('.popup__form-field_type_add-photocard-name');
const photocardLink = document.querySelector('.popup__form-field_type_add-photocard-link');

// Модальное окно с открытием фотографии карточки
const popupPhotoZoom = document.querySelector('.popup_type_image');
const popupImage = document.querySelector('.popup__image');
const popupImageCaption = document.querySelector('.popup__image-caption');

// Кнопки открытия модальных окон
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');


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

// Редактирование информации профиля в модальном окне с сохранением значений, валидация
const handleFormSubmit = evt => {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup(popupEditingProfileInfo);
}

// Работа с фотокарточками в разметке
const createPhotocard = card => {
  // Клонирование карточки и ее элементов: заголовка, фотографии и альта
  const photocardItem = photocardTemplate.cloneNode(true);

  const photocardTitle = photocardItem.querySelector('.gallery__item-title');
  const photocardImage = photocardItem.querySelector('.gallery__item-image');

  photocardTitle.textContent = card.name;
  photocardImage.src = card.link;
  photocardImage.alt = `Название места на фотографии: ${card.name}`;

  // Лайк карточки
  const photocardLike = photocardItem.querySelector('.gallery__item-like-button');
  photocardLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('gallery__item-like-button_active');
  })

  // Удаление карточки
  const photocardDeletion = photocardItem.querySelector('.gallery__item-delete-button');
  photocardDeletion.addEventListener('click', (evt) => {
    const currentPhotocard = evt.target.closest('.gallery__item');
    currentPhotocard.remove();
  })

  // Zoom
  const getPhotocardsItems = (evt, name) => {
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;
    popupImageCaption.textContent = name;
  }

  photocardImage.addEventListener('click', (evt) => {
    openPopup(popupPhotoZoom);
    getPhotocardsItems(evt, card.name);
  })

return photocardItem;
}

// Добавление новой карточки пользователем и деактивация кнопки submit
const handleNewPhotocard = evt => {
  evt.preventDefault();

  const photocardValue = {
    name: photocardName.value,
    link: photocardLink.value
  }

  evt.submitter.classList.add('popup__submit-button_disabled');
  evt.submitter.setAttribute('disabled', true);

  photoGallery.prepend(createPhotocard(photocardValue));
  evt.target.reset();

  closePopup(popupAddingPhotocard);
}


// ОБРАБОТЧИКИ СОБЫТИЙ
// Загрузка первоначального массива карточек
initialPhotocards.forEach((element) => {
  photoGallery.append(createPhotocard(element));
})

// Открытие и закрытие модальных окон по кнопкам и оверлею
profileEditButton.addEventListener('click', () => {
  openPopup(popupEditingProfileInfo);
  getProfileInfo();
})

profileAddButton.addEventListener('click', () => {
  openPopup(popupAddingPhotocard);
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
formEl.addEventListener('submit', handleFormSubmit);

// Добавление новой фотокарточки
formAddingPhotocard.addEventListener('submit', handleNewPhotocard);
