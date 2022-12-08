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
  editUserInfo(name, job) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ // В теле запроса отправляются данные на сервер с предварительным преобразованием в строку
        name: name,
        about: job
      })
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



  // addNewPhotocard();

  // showPhotocardLikes();

  // deletePhotocard();
}
