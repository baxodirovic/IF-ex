// 25-masala Barchasi musbatmi

var elH = document.querySelector(`#info`);
var a = +prompt("a son");
var b = +prompt("b son");
var c = +prompt("c son");
var d = +prompt("d son");

if (a > 0 && b > 0 && c > 0 && d > 0) {
  elH.textContent = "true"
} else (elH.textContent = "false");