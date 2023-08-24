// 24-masala Sonlar necha xonali

var elH = document.querySelector(`#info`);
var a = +prompt("a son");

if (a > 0 && a < 10) {
  elH.textContent = 1
} else if (a > 9 && a < 100) {
  elH.textContent = 2
} else if (a > 99 && a < 1000) {
  elH.textContent = 3
} else (elH.textContent = "manfiy");