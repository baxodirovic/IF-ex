// 27-masala 2 tasini solishtirish

var elHeading = document.querySelector("[data-heading]");
var a = +prompt("a son");
var b = +prompt("b son");
var c = +prompt("c son");
var a1 = a % 2;
var b1 = b % 2;
var c1 = c % 2;

// if (a1 == 0 && b1 == 0 || a1 == 0 && c1 == 0 || b1 == 0 && c1 == 0) {
//   elH.textContent = 1
// } else if (a1 == 1 && b1 == 1 || a1 == 1 && c1 == 1 || b1 == 1 && c1 == 1) {
//   elH.textContent = 2
// } else (elH.textContent = 0);

function compareTwoNum(a , b , c) {
  if (a % 2 == 0 && b % 2 == 0 || a % 2 == 0 && c % 2 == 0 || b % 2 == 0 && c % 2 == 0) {
    return 1
  } else if (a % 2 == 1 && b % 2 == 1 || a % 2 == 1 && c1 == 1 || b % 2 == 1 && c % 2 == 1) {
    return 2
  } else {
    return 0
  }
}

elHeading.textContent = compareTwoNum(a , b , c);