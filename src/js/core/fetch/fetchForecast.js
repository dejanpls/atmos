import { format } from 'date-fns';

export default async function fetchForecast(lat, lon) {
  const key = process.env.WEATHER_API_KEY;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`,
      { mode: 'cors' }
    );

    if (!response.ok) {
      throw new Error('Location could not be fetched');
    }

    const data = await response.json();
    return getData(data);
  } catch (error) {
    return renderError(error);
  }
}

function getData(response) {
  const conditions = {
    next24hrs: get24HrsConditions(response.list.slice(1, 9)),
    nextFivedays: groupByDay(getFiveDayConditions(response)),
  };
  return conditions;
}

function renderError(error) {
  console.log(error);
}

function getFiveDayConditions(response) {
  const today = new Date();

  return response.list.filter((item) => {
    const date = new Date(item.dt * 1000);
    return !(
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    );
  });
}

function groupByDay(data) {
  return data.reduce((groups, item) => {
    const date = new Date(item.dt * 1000);
    const dayKey = format(date, 'MMM do');

    if (!groups[dayKey]) {
      groups[dayKey] = [];
    }

    groups[dayKey].push(item);
    return groups;
  }, {});
}

function get24HrsConditions(list) {
  return list.map((item) => ({
    time: item.dt_txt.split(' ')[1].slice(0, 5), // e.g. 18:00
    temp: Math.ceil(item.main.temp),
    conditions: item.weather[0].description,
  }));
}
