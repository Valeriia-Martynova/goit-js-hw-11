import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, clearGallery, showLoader, hideLoader, showMessage } from './js/render-functions.js';

const form = document.querySelector('.search-form');
const input = document.querySelector('input[name="searchQuery"]');
let page = 1;
const perPage = 30;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = input.value.trim();

  if (!query) {
    showMessage('Please enter a search term!');
    return;
  }

  clearGallery();
  showLoader();

  fetchImages(query, page, perPage)
    .then(data => {
      if (data.hits.length === 0) {
        showMessage('Sorry, there are no images matching your search query. Please try again.');
        return;
      }

      renderGallery(data.hits);
    })
    .catch(error => {
      console.error(error);
      showMessage('Please try again later.');
    })
      .finally(() => {
          hideLoader();

          form.reset();
    });
});
