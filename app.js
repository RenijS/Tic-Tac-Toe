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

const checker = (scoreBoard2) => {
  scoreBoard2.forEach((rows) => {
    let score = rows[0];
    let count = 1;
    if (score != null) {
      for (let i = 1; i < rows.length && score === rows[i]; i++) {
        count++;
      }
    }
    if (count === 3) {
      console.log("Winner");
    }
  });

  for (let i = 0; i < scoreBoard2[0].length; i++) {
    if (scoreBoard2[0][i] != null) {
      if (scoreBoard2[0][i] === scoreBoard2[1][i]) {
        if (scoreBoard2[1][i] === scoreBoard2[2][i]) {
          console.log("Winner");
        }
      }
    }
  }

  (scoreBoard2[0][0] === scoreBoard2[1][1]) === scoreBoard2[2][2];
  (scoreBoard2[0][2] === scoreBoard2[1][1]) === scoreBoard2[2][0];
  if (scoreBoard2[1][1] != null) {
    if (scoreBoard2[0][0] === scoreBoard2[1][1]) {
      if (scoreBoard2[1][1] === scoreBoard2[2][2]) {
        console.log("Winner");
      }
    }

    if (scoreBoard2[0][2] === scoreBoard2[1][1]) {
      if (scoreBoard2[1][1] === scoreBoard2[2][0]) {
        console.log("Winner");
      }
    }
  }
};

let counter = 0;
let scoreBoard = [];
let scoreBoard2 = new Array(3);
for (let i = 0; i < scoreBoard2.length; i++) {
  scoreBoard2[i] = new Array(3);
}
console.log(scoreBoard2);

const options = document.querySelectorAll(".option");
const scoreP1 = document.querySelector(".player1");
const scoreP2 = document.querySelector(".player2");

options.forEach((option) => {
  option.addEventListener("click", () => {
    if (option.innerHTML == "") {
      if (counter == 0) {
        option.innerHTML = `<i class="fa-regular fa-circle " id="circle"></i>`;
        scoreBoard[option.id] = counter;
        scoreBoard2[option.dataset.rows][option.dataset.columns] = counter;
        checker(scoreBoard2);
        counter = 1;
        scoreP2.classList.remove("active");
        scoreP1.classList.add("active");
      } else {
        option.innerHTML = `<i class="fa-solid fa-xmark" id="cross"></i>`;
        scoreBoard[option.id] = counter;
        scoreBoard2[option.dataset.rows][option.dataset.columns] = counter;
        checker(scoreBoard2);
        counter = 0;
        scoreP1.classList.remove("active");
        scoreP2.classList.add("active");
      }
    }
    console.log(scoreBoard2);
  });
});
