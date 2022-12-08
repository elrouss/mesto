export default class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  // Проверка статуса
  _checkResponse(response) {
    if (response.ok) {
      return response.json();
    } else {
      Promise.reject(`Ошибка: ${response.status}/${response.statusText}`);
    }
  }

  // Получение информации о пользователе
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    })
    .then(this._checkResponse);
  }

  // Изменение информации о пользователе
  editUserInfo(name, about) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name, about })
    })
    .then(this._checkResponse);
  }

  // Получение массива карточек
  getPhotocards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
    })
    .then(this._checkResponse);
  }

  // Добавление новой карточки в галерею
  addNewPhotocard(name, link) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, link })
    })
    .then(this._checkResponse);
  }




  // showPhotocardLikes();

  // deletePhotocard();
}
