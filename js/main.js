alert("これはストップウォッチです");

let displayElm = document.getElementsByClassName("display")[0];
let startButton = document.getElementsByClassName("startButton")[0];

startButton.addEventListener("click", function () {
  console.log("スタートボタンがクリックされました");

  let seconds = 0;

  setInterval(function () {
    seconds++;
    displayElm.innerText = "経過時間: " + seconds + "秒";
    console.log("経過時間: " + seconds + "秒");
  }, 1000);
});
