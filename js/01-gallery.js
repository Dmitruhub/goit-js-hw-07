import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
console.log(createPhotosMarcup(galleryItems));

const galleryContainer = document.querySelector('.gallery');
const photosMarcup = createPhotosMarcup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', photosMarcup);

function createPhotosMarcup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}
galleryContainer.addEventListener('click', openModal);
function openModal(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }

  const options = {
    onShow: () => window.addEventListener('keydown', onEscClick),
    onclose: () => window.removeEventListener('keydown', onEscClick),
  };

  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}">`,
    options
  );

  instance.show();
  function onEscClick(evt) {
    if (evt.code === 'Escape') {
      instance.close();
    }
  }
}
