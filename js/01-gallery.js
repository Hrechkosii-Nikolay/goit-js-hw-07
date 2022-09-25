import { galleryItems } from "./gallery-items.js";
// console.log(galleryItems);

const refs = {
  gallery: document.querySelector(".gallery"),
};

function makeGalleryMarkup(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return ` <div class="gallery__item">
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
    .join("");
}

refs.gallery.insertAdjacentHTML("afterbegin", makeGalleryMarkup(galleryItems));

refs.gallery.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(e) {
  e.preventDefault();

  if (e.target === e.currentTarget) {
    return;
  }

  const modal = basicLightbox
    .create(`<img src="${e.target.dataset.source}" width="800" height="600">`)
    .show();

  window.addEventListener("keydown", closeModal);
}
function closeModal(e) {
  if (e.code === "Escape") {
    console.log(e.code);
    modal.close();
    window.removeEventListener("keydown", closeModal);
  }
}
