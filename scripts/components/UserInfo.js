// КЛАСС УПРАВЛЕНИЯ ОТОБРАЖЕНИЕМ ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЕ НА СТРАНИЦЕ
export default class UserInfo {
  constructor(userName, userDescription, userNameInput, userDesctiptionInput) {
    this._userName = userName;
    this._userDescription = userDescription;
    this._userNameInput = userNameInput;
    this._userDesctiptionInput = userDesctiptionInput;
  }

  // Геттер возвращения объекта с данными пользователя в модальное окно
  getUserInfo() {
    this._userNameInput.value = this._userName.textContent;
    this._userDesctiptionInput.value = this._userDescription.textContent;
  }

  // Сеттер добавления новых данных пользователя на страницу из модального окна
  setUserInfo() {
    this._userName.textContent = this._userNameInput.value;
    this._userDescription.textContent = this._userDesctiptionInput.value;
  }
}
