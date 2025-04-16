import { format } from 'date-fns';

export default class Render {
  static main(weatherToday) {
    document.querySelector('#location').textContent = weatherToday.location;
    document.querySelector('#icon').src = getIconPath(weatherToday.icon);
    document.querySelector('#temp-int').textContent = weatherToday.temp;
    document.querySelector('#feels-like-int').textContent =
      weatherToday.feels_like;
    document.querySelector('#conditions').textContent = weatherToday.conditions;
    document.querySelector('#time').textContent = formatDaytime(
      weatherToday.timestamp
    );
  }
}

function getIconPath(icon) {
  return `https://openweathermap.org/img/wn/${icon}.png`;
}

function formatDaytime(timestamp) {
  return format(timestamp * 1000, 'EEE, MMMM do hh:mm');
}
