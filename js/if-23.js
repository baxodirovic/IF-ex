// 23-masala Son o'qidagi a nuqta

var elH = document.querySelector(`#info`);
var a = +prompt("a son");
var b = a * -1;

if (a > 0) {
  elH.textContent = a
} else if (a < 0) {
  elH.textContent = b
} else (elH.textContent = 0);