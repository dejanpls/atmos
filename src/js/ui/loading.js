export function showLoading() {
  const wrapper = document.querySelector('.wrapper');
  const loader = document.createElement('div');
  
  document.querySelector('#main').style.display = 'none';

  loader.id = 'loader';
  loader.textContent = 'Loading...';

  const secondChild = wrapper.children[1];

  if (secondChild) {
    wrapper.insertBefore(loader, secondChild);
  } else {
    wrapper.appendChild(loader);
  }
}

export function hideLoading() {
  const loader = document.querySelector('#loader');
  if (loader) loader.remove();
  document.querySelector('#main').style.display = 'block';
}
