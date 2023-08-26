// 18-masala Kichik son

var elHeading = document.querySelector("[data-heading]");
var a = +prompt("a son");
var b = +prompt("b son");

// if (a < b) {
//   elH.textContent = a
// } else if (b < a) {
//   elH.textContent = b
// } else (elH.textContent = "teng");

function smallNum(a , b) {
  if (a < b) {
    return a;
  } else if (b < a) {
    return b;
  } else {
    return "teng";
  }
}

elHeading.textContent = smallNum(a , b);