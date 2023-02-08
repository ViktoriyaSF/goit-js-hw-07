import { galleryItems } from "./gallery-items.js";
// Change code below this line

// preview - small, original-large, description-alt;

//  підключення бібліотеки basicLightbox.
// const link = document.createElement("link");
// link.rel = "slylesheet";
// link.href =
//   "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css";
// document.head.appendChild(link);

// const script = document.createElement("script");
// script.src =
//   "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js";
// document.body.appendChild(script);

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
  // використання бібліотеки

  // -----2 варіант
  // створення basicLightbox.create ('', {option})
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" alt="${event.target.alt}">`,
    {
      // коли відкривається вишаємо слухача
      onShow: (instance) => {
        window.addEventListener("keydown", onImg);
      },
      // коли закривається знімаємо слухача
      onClose: (instance) => {
        window.removeEventListener("keydown", onImg);
      },
    }
  );
  // сама функція закриває вікно
  function onImg(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
  // визов цього basicLightbox
  instance.show();
}

// -------1 варіант
// створення basicLightbox.create (''), без опцій
//   const instance = basicLightbox.create(
//     `<img src="${event.target.dataset.source}" alt="${event.target.alt}">`
//   );
//   instance.show();

// закриття кнопка Esc

// вішаємо слухача
//   window.addEventListener("keydown", onImg);

// закриваємо вікно і знімаємо слухача
//   function onImg(event) {
//     console.log(event.code);
//     if (event.code === "Escape") {
//       instance.close();
//       window.removeEventListener("keydown", onImg);
//     }
//   }
// }
