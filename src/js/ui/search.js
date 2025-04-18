import retrieveLocation from '../core/utils/retrieveLocation.js';

export default class Search {
  static toggle() {
    const searchContainer = document.querySelector('#search-container');

    const closeBtn = generateBtn('close-btn', 'close', 'Close search');
    const input = generateSearchBox();
    const submit = generateBtn(
      'search-btn',
      'arrow_forward_ios',
      'Submit city search'
    );

    input.addEventListener('blur', () => {
      searchContainer.replaceChildren();
    });

    submit.addEventListener('mousedown', () => {
      if (input.value !== '') {
        retrieveLocation(input.value.trim());
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && input.value !== '') {
        retrieveLocation(input.value.trim());
        input.blur();
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
  btn.className = 'material-icons';
  btn.textContent = text;
  btn.setAttribute('aria-label', attribute_txt);

  return btn;
}
