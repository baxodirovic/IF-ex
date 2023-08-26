// 24-masala Sonlar necha xonali

var elHeading = document.querySelector("[data-heading]");
var a = +prompt("a son");

// if (a > 0 && a < 10) {
//   elH.textContent = 1
// } else if (a > 9 && a < 100) {
//   elH.textContent = 2
// } else if (a > 99 && a < 1000) {
//   elH.textContent = 3
// } else (elH.textContent = "manfiy");

function roomNum(a) {
  if (a > 0 && a < 10) {
    return 1
  } else if (a > 9 && a < 100) {
    return 2
  } else if (a > 99 && a < 1000) {
    return 3
  } else {
    return "manfiy"
  }
}

elHeading.textContent = roomNum(a);