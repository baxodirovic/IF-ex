// 21-masala O'zaro teng sonlar

var elHeading = document.querySelector("[data-heading]");
var a = +prompt("a son");
var b = +prompt("b son");
var c = +prompt("c son");

// if (a == b) {
//   elH.textContent = c
// } else if (a == c) {
//   elH.textContent = b
// } else if (b == c) {
//   elH.textContent = a
// } else (elH.textContent = 0);

function equalNum(a , b , c) {
  if (a == b) {
    return c
  } else if (a == c) {
    return b
  } else if (b == c) {
    return a
  } else {
    return 0
  }
}

elHeading.textContent = equalNum(a  , b , c);