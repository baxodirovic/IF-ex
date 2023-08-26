// 20-masala Sonlarni taqqoslab tashlang

var elHeading = document.querySelector("[data-heading]");
var a = +prompt("a son");
var b = +prompt("b son");
var c = +prompt("c son");

// if (a < b && b < c) {
//   elH.textContent = "1"
// } else if (a > b && b > c) {
//   elH.textContent = "2"
// } else if (b > a && b > c) {
//   elH.textContent = b
// } else if (a == b && b == c) {
//   elH.textContent = "5"
// } else (elH.textContent = "0");

function compareNum(a , b , c) {
  if (a < b && b < c) {
    return "1"
  } else if (a > b && b > c) {
    return "2"
  } else if (b > a && b > c) {
    return b
  } else if (a == b && b == c) {
    return "5"
  } else {
    return "0"
  }
}

elHeading.textContent = compareNum(a , b , c);