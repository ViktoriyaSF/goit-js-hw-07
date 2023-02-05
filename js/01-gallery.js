import { galleryItems } from "./gallery-items.js";
// Change code below this line
//  ппідключення бібліотеки basicLightbox.
const script = document.createElement("script");
script.src =
  "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js";
document.body.appendChild(script);
const link = document.createElement("link");
link.rel = "slylesheet";
link.href =
  "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css";
document.head.appendChild(link);

// змінні для роботи
const refs = {
  galleryEl: document.querySelector("div.gallery"),
};

// сформування розмітки з класами для  html
const galleryImg = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item"><a class="gallery__link" href=${original}><img class="gallery__image" src=${preview} data-source=${original} alt=${description}/></a></div>`
  )
  .join("");

refs.galleryEl.insertAdjacentHTML("beforeend", galleryImg);

// створення виклику на img
refs.galleryEl.addEventListener("click", onImgClick);

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
