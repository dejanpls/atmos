export default class RenderUI {
  static summary(weatherToday) {
    document.querySelector('#location').textContent = weatherToday.location;
    document.querySelector('#icon').src = getIconPath(weatherToday.icon);
    document.querySelector('#temp-int').textContent = weatherToday.temp;
    document.querySelector('#feels-like-int').textContent =
      weatherToday.feels_like;
    document.querySelector('#conditions').textContent = weatherToday.conditions;
  }
}

function getIconPath(icon) {
  return `https://openweathermap.org/img/wn/${icon}.png`;
}
