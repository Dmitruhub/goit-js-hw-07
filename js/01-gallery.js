import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const photos = document.querySelector('.gallery');

function createPhotoCardsMarcap(galleryItems) {
  const marcup = galleryItems.map((galleryItem) => {
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
  });
  console.log(marcup);
}

// const input = document.querySelector('#validation-input');
// const limit = +input.dataset.length;
// input.classList.add('invalid');
// const check = () => {
//   if (input.value.length === limit) {
//     input.classList.replace('invalid', 'valid');
//   } else {
//     input.classList.replace('valid', 'invalid');
//   }
// };
// input.addEventListener('blur', check);
