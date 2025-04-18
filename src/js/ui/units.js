import retrieveLocation from '../core/utils/retrieveLocation';

export default class Units {
  static toggle() {
    const btn = document.querySelector('#unit-toggle');
    const main = document.querySelector('#main');
    const location = document.querySelector('#location').textContent;

    if (btn.textContent === '°C') {
      btn.textContent = '°F';
      main.setAttribute('data-unit', 'imperial');
      retrieveLocation(location);
    } else {
      btn.textContent = '°C';
      main.setAttribute('data-unit', 'metric');
      retrieveLocation(location);
    }
  }

  static getUnit() {
    return document.querySelector('#main').getAttribute('data-unit');
  }

  static symbol() {
    return document.querySelector('#unit-toggle').textContent;
  }
}
