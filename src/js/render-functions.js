export function renderImages(container, images) {
  const fragment = document.createDocumentFragment();
  images.forEach(image => {
    const figure = document.createElement('figure');
    const link = document.createElement('a');
    link.href = image.largeImageURL;
    const img = document.createElement('img');
    img.src = image.webformatURL;
    img.alt = image.tags;
    link.appendChild(img);
    figure.appendChild(link);
    fragment.appendChild(figure);
  });
  container.appendChild(fragment);
}

export function clearGallery(container) {
  container.innerHTML = '';
}
