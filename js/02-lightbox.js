import { galleryItems } from "./gallery-items.js";
// Change code below this line

// preview - big, original-small, description-alt;

console.log(galleryItems);

// const script = document.createElement("script");
// script.src =
//   "https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.12.1/simple-lightbox.min.js";
// script.integrity =
//   "sha512-QoopN2y0b53eP+J2BNc1ff4ImedQAt2xDdhLQkUzTCyfniKkUlHbhweoYxDhCY78Z5EnMtY5rLtjtTK0Yc9Jcw==";
// script.crossorigin = "anonymous";
// script.referrerpolicy = "no-referrer";
// document.body.appendChild(script);

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

// створення виклику
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  close: false,
  showCounter: false,
});
