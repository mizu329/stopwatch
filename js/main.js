alert("これはストップウォッチです");

function addMessage(message) {
  let messageElm = document.createElement("div");
  let now = new Date();
  messageElm.innerText =
    now.getHours() +
    "時" +
    now.getMinutes() +
    "分" +
    now.getSeconds() +
    "秒" +
    "　" +
    message;
  logElm.appendChild(messageElm);
}

// 変数定義
let displayElm = document.getElementsByClassName("display")[0];
let logElm = document.querySelector(".log");
let timer = null;
let seconds = 0;

let startButton = document.getElementsByClassName("startButton")[0];
let stopButton = document.getElementsByClassName("stopButton")[0];

// スタートボタン
startButton.addEventListener("click", function () {
  if (timer === null) {
    console.log("開始");
    seconds = 0;

    timer = setInterval(function () {
      seconds++;
      displayElm.innerText = `${seconds}秒`;
      console.log("経過時間: " + seconds + "秒");
    }, 1000);

    addMessage(`開始`);
  }
});

// ストップボタン
stopButton.addEventListener("click", function () {
  if (timer !== null) {
    console.log("終了" + timer);
    clearInterval(timer);
    timer = null;

    addMessage(`終了 + 経過時間: ${seconds}秒`);
  }
});
