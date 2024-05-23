import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});

export function showNotification(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight',
  });
}

export function showLoadingIndicator() {
  const loadingIndicator = document.createElement('div');
  loadingIndicator.className = 'loading-indicator';
  loadingIndicator.innerHTML = '<div class="loader">Loading...</div>';
  document.body.appendChild(loadingIndicator);
}

export function hideLoadingIndicator() {
  const loadingIndicator = document.querySelector('.loading-indicator');
  if (loadingIndicator) {
    document.body.removeChild(loadingIndicator);
  }
}

export function createImageCard(arr) {
  return arr
    .map(image => {
      return `
    <li class="card-item">
      <a href="${image.largeImageURL}" class="photo-card">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            <span class="numbers">${image.likes}</span>
          </p>
          <p class="info-item">
            <b>Views</b>
            <span class="numbers">${image.views}</span>
          </p>
          <p class="info-item">
            <b>Comments</b>
            <span class="numbers">${image.comments}</span>
          </p>
          <p class="info-item">
            <b>Downloads</b>
            <span class="numbers">${image.downloads}</span>
          </p>
        </div>
      </a>
    </li>
  `;
    })
    .join('');
}
