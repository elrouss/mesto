// КЛАСС УПРАВЛЕНИЯ ОТОБРАЖЕНИЕМ ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЕ НА СТРАНИЦЕ
export default class UserInfo {
  constructor({ profileName, profileJob }) {
    this._userName = document.querySelector(profileName);
    this._userDescription = document.querySelector(profileJob);
  }

  // Геттер возвращения объекта с данными пользователя
  getUserInfo() {
    return {
      profileName: this._userName.textContent,
      profileJob: this._userDescription.textContent
    }
  }

  // Сеттер добавления новых данных пользователя на страницу
  setUserInfo(profileName, profileJob) {
    this._userName.textContent = profileName;
    this._userDescription.textContent = profileJob;
  }
}
