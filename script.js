let orZevel;
let resultDiv = document.getElementById("result");
let resultText = document.getElementById("result-text");
function randomNum() {
  let Zevel = Math.floor(Math.random() * (10 - 0) + 0);
  return Zevel;
}

let counterInterval = 0;

function pickRandomPic() {
  counterInterval = 0;
  resultDiv.style.opacity = "0.2";
  let i = 0;
  let pick;
  const intervalMain = setInterval(function () {
    counterInterval++;
    pick = randomNum();
    if (pick > 4) {
      text = "Yes, you should";
      resultDiv.style.backgroundImage = `url("./img/yes.jpg")`;
      resultText.innerHTML = text;
    } else {
      text = "No, you should not";
      resultDiv.style.backgroundImage = `url("./img/no.jpg")`;
      resultText.innerHTML = text;
    }
    console.log(counterInterval);
    if (counterInterval > 19) {
      resultDiv.style.opacity = "1";
      clearInterval(intervalMain);
    }
  }, 100);
}
