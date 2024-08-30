import { initCarousel } from './components/carousel/Carousel.js';
import { loadBooks } from './components/books/Books.js';
$(document).ready(async () => {
    const carouselBooks = await loadBooks()
    const infoPageBasePath = "http://127.0.0.1:8080/src/pages/books/info.html"
    
    initCarousel('#carousel-container', infoPageBasePath,  carouselBooks, { interval: 3500 });
});
