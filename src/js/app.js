import Search from './ui/search.js';
import data from './core/utils/data.js';

export default class App {
  static init() {
    data('london'); // preload London as a default location

    document
      .querySelector('#search-toggle')
      .addEventListener('click', () => Search.toggle());
  }
}
