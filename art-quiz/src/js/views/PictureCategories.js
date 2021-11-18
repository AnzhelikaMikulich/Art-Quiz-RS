const pictureInnerContainer = document.querySelector(
  '.picture-inner-container',
);

const arrImg = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
const categoriesImg = [
  'Portrait ',
  'Landscape ',
  'Still life ',
  'Impressionism  ',
  'Expressionism ',
  'Avant-garde',
  'Renaissance',
  'Surrealism',
  'Kitsch',
  'Minimalism',
  'Interior ',
  'Nude',
];
function addCategoriesPicture() {
  arrImg.map((e, index) => {
    const img = `<div class="picture-block">
    <div class="picture-overwiew">
      <div class="picture-categories">${categoriesImg[index]}</div>
      <div class="game-result"><span>01</span>/10</div>
    </div>
    <div class="picture-img">
      <img
        src="./images/img/${e}.jpg"
        alt="categories"
        class="picture-skroll"
      />
    </div>
  </div>`;
    pictureInnerContainer.innerHTML += img;
    return pictureInnerContainer;
  });
}
export default addCategoriesPicture;
