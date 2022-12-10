// КЛАСС УПРАВЛЕНИЯ ОТОБРАЖЕНИЕМ ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЕ НА СТРАНИЦЕ
export default class UserInfo {
  constructor({ profileName, profileJob/*, profileAvatar*/ }) {
    this._userName = document.querySelector(profileName);
    this._userDescription = document.querySelector(profileJob);
    /*this._userAvatar = document.querySelector(profileAvatar);*/
  }

  // Возвращение объекта с данными пользователя
  getUserInfo() {
    return {
      profileName: this._userName.textContent,
      profileJob: this._userDescription.textContent,
      // profileAvatar: this._userAvatar.src
    }
  }

  // Добавление новых данных пользователя на страницу
  setUserInfo(profileName, profileJob) {
    this._userName.textContent = profileName;
    this._userDescription.textContent = profileJob;
    // this._userAvatar.src = profileAvatar;
  }
}
