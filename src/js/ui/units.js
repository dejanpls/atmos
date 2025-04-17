export default class Units {
  static toggle() {
    const btn = document.querySelector('#metrics-toggle');
    const main = document.querySelector('#main');

    if (btn.textContent === '°C') {
      btn.textContent = '°F';
      main.setAttribute('data-metrics', 'imperial');
    } else {
      btn.textContent = '°C';
      main.setAttribute('data-metrics', 'metric');
    }
  }

  static getUnit() {
    return document.querySelector('#main').getAttribute('data-metrics');
  }

  static symbol() {
    return document.querySelector('#metrics-toggle').textContent;
  }
}
