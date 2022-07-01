const player2Btn = document.querySelector("#player2Btn");
const playerInput = document.querySelector(".playerInput");
const startBtn = document.querySelector(".startBtn");
const cancelBtn = document.querySelector(".cancelBtn");

function handleStart() {
  window.location.href = "./index1.html";
  const p1Name = document.querySelector("#player1Name").value;
  const p2Name = document.querySelector("#player2Name").value;

  sessionStorage.setItem("player1Name", p1Name);
  sessionStorage.setItem("player2Name", p2Name);
  clearInputs();
  return;
}

function clearInputs() {
  document.querySelector("#player1Name").value = "";
  document.querySelector("#player2Name").value = "";
}

player2Btn.addEventListener("click", () => {
  playerInput.classList.remove("invisible");
});

cancelBtn.addEventListener("click", () => {
  clearInputs();
  playerInput.classList.add("invisible");
});
