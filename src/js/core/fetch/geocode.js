export default async function fetchCoordinates(query) {
  const key = 'a6dda120a29b2c07e465fd131f48ceaf';
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${key}`,
      { mode: 'cors' }
    );

    if (!response.ok) {
      throw new Error('Location could not be fetched');
    }

    const data = await response.json();
    return getCoordinates(data);
  } catch (error) {
    return renderError(error);
  }
}

function getCoordinates(response) {
  const latitude = response[0].lat;
  const longitude = response[0].lon;
  return { latitude, longitude };
}

function renderError(error) {
  console.log(error);
}
