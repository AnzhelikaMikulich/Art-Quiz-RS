import addCategoriesPicture from './js/views/PictureCategories';
import addCategoriesArtist from './js/views/ArtistCategories';
import addNavigations from './js/views/Navigation';
// import addQuestion from './js/views/ArtistQuiz'
addCategoriesPicture();
addCategoriesArtist();
addNavigations();
// addQuestion()

const artistBlock = document.querySelector('.artist-inner-container');

artistBlock.addEventListener('click', (e) => {
  
  e.target.classList.add('gray');
});
