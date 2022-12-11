export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
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
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
    .then(this._checkResponse);
  }

  // Изменение информации о пользователе
  editUserInfo(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name, about })
    })
    .then(this._checkResponse);
  }

  // Обновление аватара
  editUserAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ avatar })
    })
    .then(this._checkResponse);
  }

  // Получение массива карточек
  getPhotocards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
    .then(this._checkResponse);
  }

  // Добавление новой карточки в галерею
  addNewPhotocard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, link })
    })
    .then(this._checkResponse);
  }

  // Удаление карточки
  deletePhotocard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._checkResponse);
  }

  // Добавление лайка
  addPhotocardLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
    .then(this._checkResponse);
  }

  // Удаление лайка
  deletePhotocardLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._checkResponse);
  }
}
