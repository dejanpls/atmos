export default async function fetchTodaysData(lat, lon) {
  const key = 'a6dda120a29b2c07e465fd131f48ceaf';
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`,
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
    conditions: response.weather[0].description,
    temp: Math.ceil(response.main.temp),
    feels_like: Math.ceil(response.main.feels_like),
  };
  return conditions;
}

function renderError(error) {
  console.log(error);
}
