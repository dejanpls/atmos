import fetchTodaysData from './core/fetch/fetchCurrentForecast.js';
import fetchCoordinates from './core/fetch/geocode.js';
import fetchFiveDayData from './core/fetch/fetchForecast.js';
import formatFiveDayForecast from './core/utils/formatFiveDayForecast.js';

export default class App {
  static async init() {
    const coordinates = await fetchCoordinates('moscow');
    const weatherToday = await fetchTodaysData(
      coordinates.latitude,
      coordinates.longitude
    );
    console.log('Weather today:', weatherToday);

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
}
