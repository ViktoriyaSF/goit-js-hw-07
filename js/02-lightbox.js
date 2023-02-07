import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
// змінні для роботи
const galleryEl = document.querySelector("ul.gallery");

// сформування розмітки з класами для  html
const galleryImg = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}" ><img class="gallery__image" src="${preview}" alt="Image ${description}"/></a>`
  )
  .join("");

galleryEl.insertAdjacentHTML("beforeend", galleryImg);
