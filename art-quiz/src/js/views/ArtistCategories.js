const artistInnerContainer = document.querySelector(
  '.artist-inner-container',
);

const arrImg = ['40', '50', '60', '70', '80', '90', '100', '110', '120', '130', '140', '150'];
const categoriesImg = ['Portrait ', 'Landscape ', 'Still life ', 'Impressionism  ', 'Expressionism ', 'Avant-garde', 'Renaissance', 'Surrealism', 'Kitsch', 'Minimalism', 'Interior ', 'Nude'];
function addCategoriesArtist() {
  arrImg.map((e, index) => {
    const img = `<div class="artist-block">
    <div class="artist-overwiew">
      <div class="artist-categories">${categoriesImg[index]}</div>
      <div class="game-result"><span>01</span>/10</div>
    </div>
    <div class="artist-img">
      <img
        src="./images/img/${e}.jpg"
        alt="categories"
        class="artist-skroll"
      />
    </div>
  </div>`;

    artistInnerContainer.innerHTML += img;
    return artistInnerContainer;
  });
}
export default addCategoriesArtist;
