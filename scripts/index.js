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
const nameInput = document.querySelector('.popup__field_type_profile-name');
const jobInput = document.querySelector('.popup__field_type_profile-job');

// Модальное окно с формой добавления новой фотокарточки
const popupAddingPhotocard = document.querySelector('.popup_type_add-photocard');
// Поля формы
const formAddingPhotocard = document.querySelector('.popup__form_type_photocards');
const photocardName = document.querySelector('.popup__field_type_add-photocard-name');
const photocardLink = document.querySelector('.popup__field_type_add-photocard-link');

// Модальное окно с открытием фотографии карточки
const popupPhotoZoom = document.querySelector('.popup_type_image');
const popupImage = document.querySelector('.popup__image');
const popupImageCaption = document.querySelector('.popup__image-caption');

// Кнопки открытия модальных окон
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');

// Кнопки закрытия модальных окон
const buttonClosingPopupEditProfileInfo = document.querySelector('.popup__closing-button_type_edit-profile');
const buttonClosingPopupAddPhotocard = document.querySelector('.popup__closing-button_type_add-photocard');
const buttonClosingPopupPhotoZoom = document.querySelector('.popup__closing-button_type_image');


// ФУНКЦИИ
// Открытие и закрытие модальных окон
const openPopup = popups => {
  popups.classList.add('popup_opened');
}

const closePopup = popups => {
  popups.classList.remove('popup_opened');
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

// Работа с фотокарточками в разметке
const createPhotocard = card => {
  // Клонирование карточки и ее элементов - заголовка, фотографии и альта
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

// Добавление новой карточки пользователем
const handleNewPhotocard = evt => {
  evt.preventDefault();

  const photocardValue = {
    name: photocardName.value,
    link: photocardLink.value
  }

photoGallery.prepend(createPhotocard(photocardValue));
  evt.target.reset();
  closePopup(popupAddingPhotocard);
}


// ОБРАБОТЧИКИ СОБЫТИЙ
// Загрузка первоначального массива карточек
initialPhotocards.forEach((element) => {
  photoGallery.append(createPhotocard(element));
})

// Открытие и закрытие модальных окон
profileEditButton.addEventListener('click', () => {
  openPopup(popupEditingProfileInfo);
  getProfileInfo();
})

buttonClosingPopupEditProfileInfo.addEventListener('click', () => {
  closePopup(popupEditingProfileInfo);
})

profileAddButton.addEventListener('click', () => {
  openPopup(popupAddingPhotocard);
})

buttonClosingPopupAddPhotocard.addEventListener('click', () => {
  closePopup(popupAddingPhotocard);
})

buttonClosingPopupPhotoZoom.addEventListener('click', () => {
  closePopup(popupPhotoZoom);
})

// Редактирование данных в профиле
formEl.addEventListener('submit', handleFormSubmit);

// Добавление новой фотокарточки
formAddingPhotocard.addEventListener('submit', handleNewPhotocard);
