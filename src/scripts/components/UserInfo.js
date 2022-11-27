// КЛАСС УПРАВЛЕНИЯ ОТОБРАЖЕНИЕМ ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЕ НА СТРАНИЦЕ
export default class UserInfo {
  constructor({ profileName, profileJob, profileAvatar }) {
    this._userName = document.querySelector(profileName);
    this._userDescription = document.querySelector(profileJob);
    this._userAvatar = document.querySelector(profileAvatar);
  }

  // Геттер возвращения объекта с данными пользователя
  getUserInfo() {
    return {
      profileName: this._userName.textContent,
      profileJob: this._userDescription.textContent,
      rofileAvatar: this._userAvatar.src
    }
  }

  // Сеттер добавления новых данных пользователя на страницу
  setUserInfo(profileName, profileJob, profileAvatar) {
    this._userName.textContent = profileName;
    this._userDescription.textContent = profileJob;
    this._userAvatar.src = profileAvatar;
  }
}
