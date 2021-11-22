// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);
const refs = {
    gallery: document.querySelector('.gallery')
}
console.log(refs.gallery);

createGalleryItems()
function createGalleryItems() {
    const newGalleryItem = galleryItems.map(function (newItem) {
        return `<a class="gallery__item" href="${newItem.original}">
                    <img class="gallery__image" src="${newItem.preview}" alt="${newItem.description}" />
                </a>`
    })
    refs.gallery.insertAdjacentHTML('afterbegin', newGalleryItem.join(''))
}

const lightbox = new SimpleLightbox('.gallery a', {
    overlay: true,
    animationSpeed: 150,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
});
