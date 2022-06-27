//factory function
const player = (name) => {
  let score = 0;
  const getScore = () => score;
  const won = () => {
    score++;
    if (score > 4) {
      console(`Game won by ${name}`);
      score = 0;
    }
  };
  return { name, getScore, won };
};

let counter = 0;
let scoreBoard = [];

const options = document.querySelectorAll(".option");
const scoreP1 = document.querySelector(".player1");
const scoreP2 = document.querySelector(".player2");

options.forEach((option) => {
  option.addEventListener("click", () => {
    if (option.innerHTML == "") {
      if (counter == 0) {
        option.innerHTML = `<i class="fa-regular fa-circle " id="circle"></i>`;
        scoreBoard[option.id] = counter;
        counter = 1;
        scoreP2.classList.remove("active");
        scoreP1.classList.add("active");
      } else {
        option.innerHTML = `<i class="fa-solid fa-xmark" id="cross"></i>`;
        scoreBoard[option.id] = counter;
        counter = 0;
        scoreP1.classList.remove("active");
        scoreP2.classList.add("active");
      }
    }
    console.log(scoreBoard);
  });
});
