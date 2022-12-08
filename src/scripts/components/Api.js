export default class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;

    // Функция с ответом от сервера: используется в методах
    this._response = response => {
      if (response.ok) {
        return response.json();
      } else {
        Promise.reject(`Ошибка: ${response.status}/${response.statusText}`);
      }
    }
  }

  // Получение информации о пользователе
  getUserInfo() {
    return fetch(`${this._url}users/me`, {
      headers: this._headers
    })
    .then(this._response);
  }

  // Изменение информации о пользователе
  editUserInfo(name, job) {
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ // В теле запроса отправляются данные на сервер с предварительным преобразованием в строку
        name: name,
        about: job
      })
    })
    .then(this._response);
  }

  // Получение массива карточек
  getPhotocards() {
    return fetch(`${this._url}cards`, {
      headers: this._headers
    })
    .then(this._response);
  }



  // addNewPhotocard();

  // showPhotocardLikes();

  // deletePhotocard();
}
