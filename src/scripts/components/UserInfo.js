// КЛАСС УПРАВЛЕНИЯ ОТОБРАЖЕНИЕМ ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЕ НА СТРАНИЦЕ
export default class UserInfo {
  constructor({ profileName, profileJob, profileAvatar }) {
    this._userName = document.querySelector(profileName);
    this._userDescription = document.querySelector(profileJob);
    this._userAvatar = document.querySelector(profileAvatar);
  }

  // Возвращение объекта с данными пользователя
  getUserInfo() {
    return {
      profileName: this._userName.textContent,
      profileJob: this._userDescription.textContent
    }
  }

  // Добавление новых данных пользователя на страницу
  setUserInfo(profileName, profileJob) {
    // Проверка наличия значений в виде аргументов для корректной работы с сервером (дополнительная подстраховка)
    if (profileName && profileJob) {
      this._userName.textContent = profileName;
      this._userDescription.textContent = profileJob;
    }
  }

  // Обновление аватара
  setUserAvatar(profileAvatar) {
    if (profileAvatar) {
      this._userAvatar.src = profileAvatar;
    }
  }
}
