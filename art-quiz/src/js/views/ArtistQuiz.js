import images from "./images";
const artistBlock = document.querySelector('.artist-inner-container');
  const gameArtist = document.querySelector('.game-artist');
  const options = document.querySelectorAll('.answer-var'); // поля с ответами
const dots = artistBlock.querySelectorAll('.dot');
const buttonArtist = document.querySelector('.links-page-artist');
let dotsArray = []; // 
export default function artistQuizPlay() {
  
let currentQuestion = 0;
let countQuestions = 0;

artistBlock.addEventListener('click', (e) => {
  
  e.target.classList.add('gray');
  artistBlock.classList.toggle("hide");
  gameArtist.classList.toggle("hide");

});
buttonArtist.addEventListener('click', () => {
  artistBlock.classList.remove("hide");
  
})
options.forEach((el) => {
  el.addEventListener('click', () => {

      console.log(el.textContent);

      if (countQuestions < 10) {
          const result = el.textContent === images[ currentQuestion ].author;
          // окрашиваем фон ответа в зависимости от ответа (зеленый/красный)
          result ? el.style.backgroundColor = 'green' : el.style.backgroundColor = 'red';
          dotsArray.push(result);
          
      }

      currentQuestion++;
      countQuestions++;
      if (countQuestions < 10) {
          showQuestion(currentQuestion);
          console.log(dotsArray);
      }
      if (countQuestions === 10) {
          const indexArray = (currentQuestion - 10) / 10;
          scores.result[ indexArray ] = dotsArray;
          
      }
  });
});

  
}

