import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { fetchImages } from './js/pixabay-api';
import { renderImageCards, clearGallery } from './js/render-functions';

const form = document.querySelector('#search-form');
const input = form.querySelector('input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let currentPage = 1;
let currentQuery = '';
const perPage = 20;

form.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault();
    const query = input.value.trim();

    if (!query) {
        iziToast.warning({
        title: 'Warning',
        message: 'Search query cannot be empty.',
    });
    return;
    }
    
    currentQuery = query;
    currentPage = 1;

    clearGallery();
    showLoader();

    fetchImages(currentQuery, currentPage, perPage)
        .then((response) => {
            hideLoader();

            const data = response.data;

            if (data.hits.length === 0) {
                iziToast.info({
                title: 'No Results',
                message: 'Sorry, there are no images matching your search query. Please try again.',
        });
        return;
            }
            renderImageCards(data.hits);
        })
        .catch((error) => {
            hideLoader();
            iziToast.error({
        title: 'Error',
        message: 'Failed to load images. Please try again later.',
      });
      console.error('Error fetching images:', error);
    });
}
function showLoader() {
    loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}




 