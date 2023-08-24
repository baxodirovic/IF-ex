// 20-masala Sonlarni taqqoslab tashlang

var elH = document.querySelector(`#info`);
var a = +prompt("a son");
var b = +prompt("b son");
var c = +prompt("c son");

if (a < b && b < c) {
  elH.textContent = "1"
} else if (a > b && b > c) {
  elH.textContent = "2"
} else if (b > a && b > c) {
  elH.textContent = b
} else if (a == b && b == c) {
  elH.textContent = "5"
} else (elH.textContent = "0");