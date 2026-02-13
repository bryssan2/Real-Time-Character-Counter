let textArea = document.getElementById("text-area");
let Counter_C = document.getElementById("Counter_C");
let Counter_R = document.getElementById("Counter_R");

let limit = 50;
Counter_C.textContent = 0;
Counter_R.textContent = 50;

function update() {
  let total = textArea.value.length;
  Counter_C.textContent = total;
  Counter_R.textContent = limit - total;
}

textArea.addEventListener("keydown", (e) => {
  const isChar = e.key.length === 1;

  if (isChar && textArea.value.length > limit) {
    e.preventDefault();
    return;
  }

  update();
});
