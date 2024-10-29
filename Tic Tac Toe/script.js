const box = document.querySelectorAll(".box");
const player = document.querySelectorAll(".player");
const message = document.querySelector(".buttons span");
const button = document.querySelector(".buttons button");

let turn = true;
const winningPoints = [
  // horizontal winningPoints
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // vertical winningPoints
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  //winningPoints in daigonal
  [0, 4, 8],
  [2, 4, 6],
];
box.forEach((item) => {
  item.addEventListener("click", () => {
    if (turn) {
      item.textContent = "x";
      item.disabled = true;
      turn = false;
      player[0].className = "player x";
      player[1].className = "player o active";
    } else {
      item.textContent = "o";
      item.disabled = true;
      turn = true;
      player[0].className = "player x active";
      player[1].className = "player o";
    }
    checkWinner();
  });
});

const checkWinner = () => {
  for (let winning of winningPoints) {
    let pos1 = box[winning[0]].textContent;
    let pos2 = box[winning[1]].textContent;
    let pos3 = box[winning[2]].textContent;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        message.innerHTML = `${pos1} is win!`;
        box.forEach((item) => {
          item.disabled = true;
        });
      }
    }
  }
};

button.onclick = () => {
  box.forEach((item) => {
    item.innerHTML = "";
    item.disabled = false;
  });
  player[0].className = "player x active";
  player[1].className = "player o";
  message.innerHTML = "";
};
