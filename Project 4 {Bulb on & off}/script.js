let bulbCircle = document.querySelector(".container");
let Btn = document.querySelector("button");

let flag = 0;

Btn.addEventListener("click", () => {
  if (flag === 0) {
    bulbCircle.style.backgroundColor = "yellow";
    Btn.innerText = "OFF";
    flag = 1;
  } else {
    bulbCircle.style.backgroundColor = "transparent";
    Btn.innerText = "ON";
    flag = 0;
  }
});
 