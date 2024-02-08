import { galleryItems } from './gallery';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const createGallery = ({ preview, original, description }) => {
  return `<li class="gallery-item">
	<a class="gallery-link" href="${original}">
		<img 
			class="gallery-image" 
			src="${preview}" 
			alt="${description}" 
			/>
	</a>
</li>`
  
};

const makeElement = galleryItems.map(createGallery).join('');
const cardsContainer = document.querySelector(".gallery");

cardsContainer.insertAdjacentHTML('beforeend', makeElement);


const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt', });

