
export default function artistQuizPlay() {
  const artistBlock = document.querySelector('.artist-inner-container');
  const gameArtist = document.querySelector('.game-artist')

artistBlock.addEventListener('click', (e) => {
  
  e.target.classList.add('gray');
  artistBlock.classList.toggle("hide");
  gameArtist.classList.toggle("hide");
});
  
}

