
import 'es6-promise';
import 'whatwg-fetch';

function getBuy() {
  const url = `https://private-f9edf2-rebeca1.apiary-mock.com/buy_market`;

  return fetch(url)
    .then((response) => {
      return response;
    });
}


export default {
    getBuy
};