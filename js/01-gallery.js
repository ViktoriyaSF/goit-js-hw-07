import { galleryItems } from "./gallery-items.js";
// Change code below this line

// preview - big, original-small, description-alt;

//  підключення бібліотеки basicLightbox.
const script = document.createElement("script");
script.src =
  "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js";
document.body.appendChild(script);

// змінні для роботи
const galleryEl = document.querySelector("div.gallery");

// сформування розмітки з класами для  html
const galleryImg = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item"><a class="gallery__link" href="${original}" ><img class="gallery__image" src="${preview}" data-source="${original}" alt="Image ${description}"/></a></div>`
  )
  .join("");

galleryEl.insertAdjacentHTML("beforeend", galleryImg);

// створення виклику на img
galleryEl.addEventListener("click", onImgClick);

function onImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const largeImg = event.target.dataset.source;

  const instance = basicLightbox.create(
    `<img src=${largeImg} alt=${event.target.alt}/>`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onModal);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", onModal);
      },
    }
  );
  instance.show();

  function onModal(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
