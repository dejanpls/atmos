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
}

function getIconPath(icon) {
  return `https://openweathermap.org/img/wn/${icon}.png`;
}

function formatDaytime(timestamp) {
  return format(timestamp * 1000, 'EEE MMM d, HH:mm');
}
