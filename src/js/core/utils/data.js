import fetchCoordinates from '../fetch/geocode.js';
import fetchTodaysData from '../fetch/fetchCurrentForecast.js';
import fetchFiveDayData from '../fetch/fetchForecast.js';
import formatFiveDayForecast from '../utils/formatFiveDayForecast.js';
import Render from '../ui/render.js';
import Notify from '../ui/notify.js';

export default async function data(query) {
  const coordinates = await fetchCoordinates(query);

  if (!coordinates) {
    Notify.error('Failed to fetch any location', 1500);
    return;
  }

  const weatherToday = await fetchTodaysData(
    coordinates.latitude,
    coordinates.longitude
  );

  Render.main(weatherToday);
  console.log(weatherToday);

  const weather = await fetchFiveDayData(
    coordinates.latitude,
    coordinates.longitude
  );

  console.log('Next 24 hrs:');
  console.log(weather.next24hrs);

  console.log('Five-day forecast:');

  const fiveDayForecast = formatFiveDayForecast(weather.nextFivedays);

  console.log(fiveDayForecast);
}
