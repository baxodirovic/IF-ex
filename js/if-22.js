// Sonlar o'qidagi masofa

var elH = document.querySelector(`#info`);
var a = +prompt("a son");
var b = +prompt("b son");
var result1 = a - b; // a katta bo'lsa
var result2 = b - a; // b katta bo'lsa

if (a > b) {
  elH.textContent = result1
} else if (b > a) {
  elH.textContent = result2
} else (elH.textContent = 0);