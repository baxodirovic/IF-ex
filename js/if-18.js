// 18-masala Kichik son

var elH = document.querySelector(`#info`);
var a = +prompt("a son");
var b = +prompt("b son");

if (a < b) {
  elH.textContent = a
} else if (b < a) {
  elH.textContent = b
} else (elH.textContent = "teng");