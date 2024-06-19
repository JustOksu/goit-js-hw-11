// main.js

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api.js';
import { clearGallery } from './js/render-functions.js';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const gallery = document.getElementById('gallery');
const loader = document.createElement('div');
loader.classList.add('loader');

const lightbox = new SimpleLightbox('.gallery a');

searchForm.addEventListener('submit', async event => {
  event.preventDefault();
  const searchTerm = searchInput.value.trim();
  if (!searchTerm) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search term!',
      position: 'topRight',
    });
    return;
  }

  clearGallery(gallery);
  gallery.appendChild(loader);

  try {
    const data = await fetchImages(searchTerm);
    if (data.length === 0) {
      iziToast.info({
        title: 'Info',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    } else {
      renderImages(data);
    }
  } catch (error) {
    console.error('Error fetching images:', error);
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
      position: 'topRight',
    });
  } finally {
    gallery.removeChild(loader);
    lightbox.refresh();
  }
});

function renderImages(images) {
  images.forEach(image => {
    const item = document.createElement('div');
    item.classList.add('gallery-item');

    const link = document.createElement('a');
    link.href = image.largeImageURL;
    link.setAttribute('data-lightbox', 'gallery');

    const img = document.createElement('img');
    img.src = image.webformatURL;
    img.alt = image.tags;

    link.appendChild(img);
    item.appendChild(link);
    gallery.appendChild(item);
  });
}
