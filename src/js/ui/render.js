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

  static cards(weather24hrs) {
    const container = document.querySelector('#next24hrs-container');
    if (container.childElementCount > 0) container.replaceChildren();
    
    weather24hrs.forEach(hour => {
      const card = document.createElement('div');
      card.id = 'card';
      const time = document.createElement('p');
      time.id = 'card-time'
      time.textContent = hour.time;
      const icon = document.createElement('img');
      icon.id = 'card-icon';
      icon.src = getIconPath(hour.icon);
      const temp = document.createElement('p');
      temp.id = 'card-temp';
      temp.textContent = `${hour.temp} °C`;
      
      card.appendChild(time);
      card.appendChild(icon);
      card.appendChild(temp);
      
      container.appendChild(card);
    });
  }

  static fiveDay(weatherFiveDays) {
    const container = document.querySelector('#five-day-container');

    if (container.childElementCount > 0) container.replaceChildren();
    
    weatherFiveDays.forEach(array => {
      const day = document.createElement('div');
      day.id = 'day';
      const date = document.createElement('p');
      date.id = 'day-date'
      date.textContent = array.date;

      const icon = document.createElement('img');
      icon.id = 'day-icon';
      icon.src = getIconPath(array.icon);

      const conditions = document.createElement('p');
      conditions.id = 'day-conditions';
      conditions.textContent = array.conditions;

      const max = document.createElement('p');
      max.id = 'day-max';
      max.textContent = `${array.max} °C`;

      const min = document.createElement('p');
      min.id = 'day-min';
      min.textContent = `${array.min} °C`;
      
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
  return format(timestamp * 1000, 'EEE MMM d, HH:mm');
}
