let textArea = document.getElementById("text-area");
let Counter_C = document.getElementById("Counter_C");
let Counter_R = document.getElementById("Counter_R");

let totalChar = null;
let Remaining = 50;
let limit = 50;

function isChar(e) {
  if (e.length === 1) {
    return true;
  }
}

function stopChar(e) {
  if ((e && totalChar > limit) || !e) {
    e.preventDefault();
    return;
  }
}

function updateTotalChar(e) {
  if (e && totalChar < limit) {
    totalChar++;
  }
}

function updateRemaining(e) {
  if ((e = "backspace" && totalChar > 0)) {
    Remaining--;
    totalChar--;
  }
}

textArea.addEventListener("keydown", (e) => {
  stopChar(isChar(e.key));
  updateTotalChar(isChar(e.key));
  updateRemaining(e.key);
  Counter_C.textContent = totalChar;
  Counter_R.textContent = Remaining;
});
