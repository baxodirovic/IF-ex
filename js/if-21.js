// 21-masala O'zaro teng sonlar

var elH = document.querySelector(`#info`);
var a = +prompt("a son");
var b = +prompt("b son");
var c = +prompt("c son");

if (a == b) {
  elH.textContent = c
} else if (a == c) {
  elH.textContent = b
} else if (b == c) {
  elH.textContent = a
} else (elH.textContent = 0);