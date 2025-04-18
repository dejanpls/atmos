import retrieveLocation from '../core/utils/retrieveLocation';

export default class Units {
  static toggle() {
    const btn = document.querySelector('#metrics-toggle');
    const main = document.querySelector('#main');
    const location = document.querySelector('#location').textContent;

    if (btn.textContent === '°C') {
      btn.textContent = '°F';
      main.setAttribute('data-metrics', 'imperial');
      retrieveLocation(location);
    } else {
      btn.textContent = '°C';
      main.setAttribute('data-metrics', 'metric');
      retrieveLocation(location);
    }
  }

  static getUnit() {
    return document.querySelector('#main').getAttribute('data-metrics');
  }

  static symbol() {
    return document.querySelector('#metrics-toggle').textContent;
  }
}
