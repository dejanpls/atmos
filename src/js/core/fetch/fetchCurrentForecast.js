import Units from '../../ui/units.js';

export default async function fetchTodaysData(lat, lon) {
  const key = process.env.WEATHER_API_KEY;
  const unit = Units.getUnit();
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=${unit}`,
      { mode: 'cors' }
    );

    if (!response.ok) {
      throw new Error('Location could not be fetched');
    }

    const data = await response.json();
    return getCurrentConditions(data);
  } catch (error) {
    return renderError(error);
  }
}

function getCurrentConditions(response) {
  const conditions = {
    location: response.name,
    timestamp: response.dt,
    conditions: response.weather[0].description,
    icon: response.weather[0].icon,
    temp: Math.ceil(response.main.temp),
    feels_like: Math.ceil(response.main.feels_like),
  };
  return conditions;
}

function renderError(error) {
  console.log(error);
}
