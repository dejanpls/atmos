import Search from './ui/search.js';
import retrieveLocation from './core/utils/retrieveLocation.js';
import Units from './ui/units.js';

export default class App {
  static init() {
    retrieveLocation('london'); // preload London as a default location

    document
      .querySelector('#search-toggle')
      .addEventListener('click', () => Search.toggle());

    document
      .querySelector('#metrics-toggle')
      .addEventListener('click', () => Units.toggle());
  }
}
