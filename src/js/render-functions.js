import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox;

export function renderImageCards(images) {
    const gallery = document.querySelector('.gallery');
    const markup = images
        .map(
            ({ webformatURL, LargeImageURL, tags, likes, views, comments, downloads }) =>
                `
        <a href="${largeImageURL}" class="gallery__item">          
            <img src="${webformatURL}" alt="${tags}" loading="lazy" class="image-card__img"/>            
              <p><b>Likes:</b> ${likes}</p>
              <p><b>Views:</b> ${views}</p>
              <p><b>Comments:</b> ${comments}</p>
              <p><b>Downloads:</b> ${downloads}</p>                     
        </a>
        `
        )
        .join('');
    
    gallery.innerHTML = markup;

    if (!lightbox) {
        lightbox = new SimpleLightbox('.gallery a');
    } else {
        lightbox.refresh();
    }
}

export function clearGallery() {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
}