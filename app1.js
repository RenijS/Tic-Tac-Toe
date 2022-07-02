window.addEventListener("load", () => {
  const p1Name = sessionStorage.getItem("player1Name");
  const p2Name = sessionStorage.getItem("player2Name");

  document.querySelector("#player1Name").textContent = p1Name + ": ";
  document.querySelector("#player2Name").textContent = p2Name + ": ";
});
//factory function
const player = (name) => {
  this.name = name;
  let score = 0;
  const getScore = () => score;
  const won = () => {
    score++;
    if (score === 3) {
      console.log(`Game won by ${name}`);
      showWinner(name);
      score = 0;
    }
  };
  return { name, getScore, won };
};

const checker = (scoreBoard2) => {
  //checking horizontal
  for (let i = 0; i < scoreBoard2.length; i++) {
    let rows = scoreBoard2[i];
    if (rows[0] != null) {
      console.log(rows[1] === rows[2]);
      if (rows[0] === rows[1]) {
        if (rows[1] === rows[2]) {
          return true;
        }
      }
    }
  }

  //checking vertical
  for (let i = 0; i < scoreBoard2[0].length; i++) {
    if (scoreBoard2[0][i] != null) {
      if (scoreBoard2[0][i] === scoreBoard2[1][i]) {
        if (scoreBoard2[1][i] === scoreBoard2[2][i]) {
          return true;
        }
      }
    }
  }

  //checking diagonal
  if (scoreBoard2[1][1] != null) {
    if (scoreBoard2[0][0] === scoreBoard2[1][1]) {
      if (scoreBoard2[1][1] === scoreBoard2[2][2]) {
        return true;
      }
    }

    if (scoreBoard2[0][2] === scoreBoard2[1][1]) {
      if (scoreBoard2[1][1] === scoreBoard2[2][0]) {
        return true;
      }
    }
  }

  //Checking draw
  for (let i = 0; i < scoreBoard2.length; i++) {
    let row = scoreBoard2[i];
    if (row.includes(undefined)) {
      return;
    } else {
      if (i === 2) {
        console.log("Draw");
        showMessage("Draw");
      }
    }
  }
};

const clearBoard = (scoreBoard2) => {
  scoreBoard2.forEach((arr) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = undefined;
    }
  });
  console.log(scoreBoard2);
  options.forEach((option) => {
    option.innerHTML = "";
  });
};

const toMainMenu = () => {
  window.location.replace("./index.html");
};

let counter = 0;
let scoreBoard = [];
let scoreBoard2 = new Array(3);
for (let i = 0; i < scoreBoard2.length; i++) {
  scoreBoard2[i] = new Array(3);
}
console.log(scoreBoard2);
const player1 = player(sessionStorage.getItem("player1Name"));
const player2 = player(sessionStorage.getItem("player2Name"));

console.log(player1);

const options = document.querySelectorAll(".option");
const scoreP1 = document.querySelector(".player1");
const scoreP2 = document.querySelector(".player2");
const modal = document.querySelector(".modal");
const winnerName = document.querySelector("#winnerName");
const againBtn = document.querySelector(".againBtn");
const cancelBtn = document.querySelector(".cancelBtn");
const restartBtn = document.querySelector(".restartBtn");

function showWinner(name) {
  document.querySelector("#winnerName").textContent = name;
  return modal.showModal();
}

function showMessage(msg) {
  const msgDiv = document.querySelector(".message");
  msgDiv.textContent = msg;
  msgDiv.classList.remove("invisible");
  setTimeout(() => {
    setTimeout(() => {
      msgDiv.classList.add("invisible");
    }, 100);
    clearBoard(scoreBoard2);
  }, 700);
}

options.forEach((option) => {
  option.addEventListener("click", () => {
    if (option.innerHTML == "") {
      if (counter == 0) {
        option.innerHTML = `<i class="fa-regular fa-circle " id="circle"></i>`;
        scoreBoard[option.id] = counter;
        scoreBoard2[option.dataset.rows][option.dataset.columns] = counter;
        if (checker(scoreBoard2)) {
          player2.won();
          document.querySelector(".p2Score").textContent = player2.getScore();
          showMessage("Win");
        }
        counter = 1;
        scoreP2.classList.remove("active");
        scoreP1.classList.add("active");
      } else {
        option.innerHTML = `<i class="fa-solid fa-xmark" id="cross"></i>`;
        scoreBoard[option.id] = counter;
        scoreBoard2[option.dataset.rows][option.dataset.columns] = counter;
        if (checker(scoreBoard2)) {
          player1.won();
          document.querySelector(".p1Score").textContent = player1.getScore();
          showMessage("Win");
        }
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
  toMainMenu();
});

restartBtn.addEventListener("click", () => {
  document.querySelector(".p1Score").textContent = 0;
  document.querySelector(".p2Score").textContent = 0;
  clearBoard(scoreBoard2);
});

againBtn.addEventListener("click", () => {
  modal.close();
  document.querySelector(".p1Score").textContent = 0;
  document.querySelector(".p2Score").textContent = 0;
  clearBoard(scoreBoard2);
});
