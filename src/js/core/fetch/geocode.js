import { showLoading } from "../../ui/loading";

export default async function fetchCoordinates(query) {
  const key = process.env.WEATHER_API_KEY;
  try {
    showLoading();
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
