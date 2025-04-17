import fetchCoordinates from '../fetch/geocode.js';
import fetchTodaysData from '../fetch/fetchCurrentForecast.js';
import fetchFiveDayData from '../fetch/fetchForecast.js';
import formatFiveDayForecast from './formatFiveDayForecast.js';
import Render from '../../ui/render.js';
import Notify from '../../ui/notify.js';

export default async function retrieveLocation(query) {
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

  const weather = await fetchFiveDayData(
    coordinates.latitude,
    coordinates.longitude
  );

  Render.cards(weather.next24hrs);

  const fiveDayForecast = formatFiveDayForecast(weather.nextFivedays);

  Render.fiveDay(fiveDayForecast);
}
