import data from '../core/utils/data.js';

export default class Search {
  static toggle() {
    const searchContainer = document.querySelector('#search-container');

    const searchToggle = document.querySelector('#search-toggle');
    searchToggle.style.display = 'none';

    const closeBtn = generateBtn('close-btn', 'X', 'Close search');
    const input = generateSearchBox();
    const submit = generateBtn('search-btn', 'Search', 'Submit city search');

    input.addEventListener('blur', () => {
      searchContainer.replaceChildren();
      searchToggle.style.display = 'block';
    });

    submit.addEventListener('mousedown', () => {
      if (input.value !== '') {
        data(input.value.trim());
      }
    });

    searchContainer.appendChild(closeBtn);
    searchContainer.appendChild(input);
    searchContainer.appendChild(submit);
    input.focus();
  }
}

function generateSearchBox() {
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'search-input';
  input.placeholder = 'Enter city...';
  input.required = true;
  input.setAttribute('aria-label', 'City search input');

  return input;
}

function generateBtn(id, text, attribute_txt) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.id = id;
  btn.textContent = text;
  btn.setAttribute('aria-label', attribute_txt);

  return btn;
}
