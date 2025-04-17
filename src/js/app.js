import Search from './ui/search.js';
import retrieveLocation from './core/utils/retrieveLocation.js';

export default class App {
  static init() {
    retrieveLocation('london'); // preload London as a default location

    document
      .querySelector('#search-toggle')
      .addEventListener('click', () => Search.toggle());
  }
}
