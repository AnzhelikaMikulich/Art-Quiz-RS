import images from './images';
export default function pictureQuizPlay() {
  const pictureBlock = document.querySelector('.picture-inner-container');
  const gamePicture = document.querySelector('.game-pictures')
  const options = document.querySelectorAll('.answer-var'); // поля с ответами
const dots = pictureBlock.querySelectorAll('.dot'); // поля с ответами

pictureBlock.addEventListener('click', (e) => {
  
  e.target.classList.add('gray');
  pictureBlock.classList.toggle("hide");
  gamePicture.classList.toggle("hide");
});
  
}

