
export default function pictureQuizPlay() {
  const pictureBlock = document.querySelector('.picture-inner-container');
  const gamePicture = document.querySelector('.game-pictures')

pictureBlock.addEventListener('click', (e) => {
  
  e.target.classList.add('gray');
  pictureBlock.classList.toggle("hide");
  gamePicture.classList.toggle("hide");
});
  
}

