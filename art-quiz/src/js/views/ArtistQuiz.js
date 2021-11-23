import images from "./images";
const artistBlock = document.querySelector('.artist-inner-container');
  const gameArtist = document.querySelector('.game-artist');
  const options = document.querySelectorAll('.answer-var'); // поля с ответами
const dots = artistBlock.querySelectorAll('.dot');
let dotsArray = []; // 
export default function artistQuizPlay() {
  
let currentQuestion = 0;
let countQuestions = 0;

artistBlock.addEventListener('click', (e) => {
  
  e.target.classList.add('gray');
  artistBlock.classList.toggle("hide");
  gameArtist.classList.toggle("hide");

});

options.forEach((el) => {
  el.addEventListener('click', () => {

      console.log(el.textContent);

      if (countQuestions < 10) {
          const result = el.textContent === images[ currentQuestion ].author;
          // окрашиваем фон ответа в зависимости от ответа (зеленый/красный)
          result ? el.style.backgroundColor = 'green' : el.style.backgroundColor = 'red';
          dotsArray.push(result);
          showDotsGame1();
      }

      currentQuestion++;
      countQuestions++;
      if (countQuestions < 10) {
          showQuestion(currentQuestion);
          console.log(dotsArray);
      }
      if (countQuestions === 10) {
       
          // showResultPopUp();
          const indexArray = (currentQuestion - 10) / 10;
          scores.result[ indexArray ] = dotsArray;
          // scores.saveLS();
      }
  });
});

  
}
function showDotsGame1() {
  // красим все точки в серый
  for (let i = 0; i < dots.length; i++) {
      dots[ i ].style.backgroundColor = "gray";
  }
  // красим в красный ложные ответы и в зеленый правильные
  for (let i = 0; i < dotsArray.length; i++) {
      console.log(dotsArray.length);
      dotsArray[ i ] ? dots[ i ].style.backgroundColor = "green" : dots[ i ].style.backgroundColor = "red";
  }
}
