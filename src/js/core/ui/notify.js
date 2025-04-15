export default class Notify {
  static error(message, timeout) {
    const container = document.querySelector('#content');

    // Clear existing notification if one is already showing
    const existing = document.querySelector('#notification-box');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.id = 'notification-box';

    const text = document.createElement('p');
    text.id = 'notification-text';
    text.textContent = message;

    notification.appendChild(text);
    container.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, timeout);
  }
}
