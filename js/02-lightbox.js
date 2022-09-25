import { galleryItems } from "./gallery-items.js";

const refs = {
  gallery: document.querySelector(".gallery"),
};

function makeGalleryMarkup(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a></li>`;
    })
    .join("");
}

refs.gallery.insertAdjacentHTML("afterbegin", makeGalleryMarkup(galleryItems));

const slider = new SimpleLightbox(".gallery__item", {
  disableRightClick: true,
  captionsData: "alt",
});

window.addEventListener("keydown", nextPic);

function nextPic(e) {
  if (e.code === "KeyF") {
    console.log("next");
    slider.next();
  }
}

slider.on("error.simplelightbox", () => {
  console.log("load next");
  slider.next();
});
