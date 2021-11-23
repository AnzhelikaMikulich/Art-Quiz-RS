import images from './images';
export default function pictureQuizPlay() {
  const pictureBlock = document.querySelector('.picture-inner-container');
  const gamePicture = document.querySelector('.game-pictures');
  const buttonPicture = document.querySelector('.links-page-picture');
  const options = document.querySelectorAll('.answer-var');
const dots = pictureBlock.querySelectorAll('.dot'); 

pictureBlock.addEventListener('click', (e) => {
  
  e.target.classList.add('gray');
  pictureBlock.classList.toggle("hide");
  gamePicture.classList.toggle("hide");
});

buttonPicture.addEventListener('click', () => {
  pictureBlock.classList.remove("hide");
  
})
  
}

