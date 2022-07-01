window.addEventListener("load", () => {
  const p1Name = sessionStorage.getItem("player1Name");
  const p2Name = sessionStorage.getItem("player2Name");

  document.querySelector("#player1Name").textContent = p1Name + ": ";
  document.querySelector("#player2Name").textContent = p2Name + ": ";
});
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
      showWinner();
    }
  });

  for (let i = 0; i < scoreBoard2[0].length; i++) {
    if (scoreBoard2[0][i] != null) {
      if (scoreBoard2[0][i] === scoreBoard2[1][i]) {
        if (scoreBoard2[1][i] === scoreBoard2[2][i]) {
          console.log("Winner");
          showWinner();
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
        showWinner();
      }
    }

    if (scoreBoard2[0][2] === scoreBoard2[1][1]) {
      if (scoreBoard2[1][1] === scoreBoard2[2][0]) {
        console.log("Winner");
        showWinner();
      }
    }
  }
};

const clearBoard = (scoreBoard2) => {
  scoreBoard2.forEach((arr) => {
    arr.forEach((score) => {
      score = "";
    });
  });
  options.forEach((option) => {
    option.innerHTML = "";
  });
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
const modal = document.querySelector(".modal");
const winnerName = document.querySelector("#winnerName");
const againBtn = document.querySelector("#againBtn");
const cancelBtn = document.querySelector(".cancelBtn");

function showWinner() {
  return modal.showModal();
}

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

cancelBtn.addEventListener("click", () => {
  modal.close();
});
