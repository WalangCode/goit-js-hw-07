import { galleryItems } from "./gallery-items.js";
// Change code below this line

let gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  let li = `
    <li class="gallery__item">
        <a class="gallery__link" href="javascript:void(0)">
        <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
        />
        </a>
    </li>
    `;
  gallery.innerHTML += li;
});

gallery.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    let bigimage = e.target.getAttribute("data-source");
    let instance = basicLightbox.create(
      `<img src = ${bigimage} width = "800" height = "600" >`
    );
    instance.show();
    window.addEventListener("keyup", (e) => {
      if (e.code == "Escape") {
        instance.close();
      }
    });
  }
});
