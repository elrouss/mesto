export default class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  // Получение информации о пользователе
  getUserInfo() {
    return fetch(this._url, {
      headers: this._headers
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        Promise.reject(`Ошибка: ${response.status}/${response.statusText}`);
      }
    })
  }

  // Изменение информации о пользователе
  changeUserInfo() {

  }

  // Получение массива карточек
  getPhotocards() {
    return fetch(this._url, {
      headers: this._headers
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        Promise.reject(`Ошибка: ${response.status}/${response.statusText}`);
      }
    })
  }



  // addNewPhotocard();

  // showPhotocardLikes();

  // deletePhotocard();
}
