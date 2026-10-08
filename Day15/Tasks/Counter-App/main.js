let count = 0;
let meraCount = document.getElementById("count");
function inCre() {
  count++;
  meraCount.innerText = count;
}

function deCre() {
  count--;
  if (count >= 0) {
    meraCount.innerText = count;
  }
}
