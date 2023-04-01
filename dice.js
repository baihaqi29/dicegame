const startButton = document.querySelector(".btn");
const nameButton = document.querySelector(".btn-name");
const playerName1 = document.querySelectorAll("p")[0];
const playerName2 = document.querySelectorAll("p")[1];
const playerNameValue = document.querySelector(".player-name")



startButton.addEventListener("submit", (event) => {
  event.preventDefault()
  diceeGame()
})

let nameOfPlayer = () => {
  let playerName1Value = document.querySelector("input.player-1").value;
  let playerName2Value = document.querySelector("input.player-2").value;

  playerName1.innerHTML = playerName1Value
  playerName2.innerHTML = playerName2Value
}

playerNameValue.addEventListener("submit", (event) => {
  event.preventDefault();

  nameOfPlayer()

})

startButton.onclick = () => {
  diceeGame();
}

function diceeGame() {
  let randomDiceNumber1 = Math.floor((Math.random() * 6) + 1);
  let randomDiceNumber2 = Math.floor((Math.random() * 6) + 1);
  let randomImage1 = "images/dice" + randomDiceNumber1 + ".png";
  let randomImage2 = "images/dice" + randomDiceNumber2 + ".png";
  const diceImg1 = document.querySelector(".img1");
  const diceImg2 = document.querySelector(".img2");
  let playerName1Value = document.querySelector("input.player-1").value;
  let playerName2Value = document.querySelector("input.player-2").value;
  diceImg1.setAttribute("src", randomImage1);
  diceImg2.setAttribute("src", randomImage2);


  // nameOfPlayer()
  const resultText = document.querySelector("h1");

  resultText.innerHTML = (randomDiceNumber1 > randomDiceNumber2) ? "🚩" + playerName1Value + " Wins!" :
    (randomDiceNumber1 < randomDiceNumber2) ? playerName2Value + " Wins!🚩" :
    "Draw";


}
