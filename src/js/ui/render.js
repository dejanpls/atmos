import { formatDistanceToNow } from 'date-fns';
import Units from './units.js';

export default class Render {
  static main(weatherToday) {
    document.querySelector('#location').textContent = weatherToday.location;
    document.querySelector('#icon').src = getIconPath(weatherToday.icon);
    document.querySelector('#temp-int').textContent =
      weatherToday.temp + ' ' + Units.symbol();
    document.querySelector('#feels-like-int').textContent =
      weatherToday.feels_like + ' ' + Units.symbol();
    document.querySelector('#conditions').textContent = weatherToday.conditions;
    document.querySelector('#time').textContent = formatDaytime(
      weatherToday.timestamp
    );
  }

  static cards(weather24hrs) {
    const container = document.querySelector('#next24hrs-container');
    if (container.childElementCount > 0) container.replaceChildren();

    weather24hrs.forEach((hour) => {
      const card = document.createElement('div');
      card.id = 'card';
      const time = document.createElement('p');
      time.id = 'card-time';
      time.textContent = hour.time;
      const icon = document.createElement('img');
      icon.id = 'card-icon';
      icon.src = getIconPath(hour.icon);
      const temp = document.createElement('p');
      temp.id = 'card-temp';
      temp.textContent = `${hour.temp} ${Units.symbol()}`;

      card.appendChild(time);
      card.appendChild(icon);
      card.appendChild(temp);

      container.appendChild(card);
    });
  }

  static fiveDay(weatherFiveDays) {
    const container = document.querySelector('#five-day-container');

    if (container.childElementCount > 0) container.replaceChildren();

    weatherFiveDays.forEach((array) => {
      const day = document.createElement('div');
      day.id = 'day';
      const date = document.createElement('p');
      date.id = 'day-date';
      date.textContent = array.date;

      const icon = document.createElement('img');
      icon.id = 'day-icon';
      icon.src = getIconPath(array.icon);

      const conditions = document.createElement('p');
      conditions.id = 'day-conditions';
      conditions.textContent = array.conditions;

      const max = document.createElement('p');
      max.id = 'day-max';
      max.textContent = `${array.max} ${Units.symbol()}`;

      const min = document.createElement('p');
      min.id = 'day-min';
      min.textContent = `${array.min} ${Units.symbol()}`;

      day.appendChild(date);
      day.appendChild(icon);
      day.appendChild(conditions);
      day.appendChild(max);
      day.appendChild(min);

      container.appendChild(day);
    });
  }
}

function getIconPath(icon) {
  return `https://openweathermap.org/img/wn/${icon}.png`;
}

function formatDaytime(timestamp) {
  const formatted = formatDistanceToNow(new Date(timestamp * 1000), {
    addSuffix: true,
  });

  return `Updated ${formatted}`;
}
