import addCategoriesPicture from './js/views/PictureCategories';
import addCategoriesArtist from './js/views/ArtistCategories';
import addNavigations from './js/views/Navigation';
import settings from './js/views/Settings'
// import addQuestion from './js/views/ArtistQuiz'
addCategoriesPicture();
addCategoriesArtist();
addNavigations();
settings()
// addQuestion()

const artistBlock = document.querySelector('.artist-inner-container');

artistBlock.addEventListener('click', (e) => {
  
  e.target.classList.add('gray');
});
