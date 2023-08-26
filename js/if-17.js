// 17-masala Nechtasi musbat
var elHeading = document.querySelector("[data-heading]")
var a = +prompt("a son");
var b = +prompt("b son");
var c = +prompt("c son");

// if (a > 0 && b > 0 && c > 0) {
//   console.log(3)
// } else if (a > 0 && b > 0 || b > 0 && c > 0 || a > 0 && c > 0) {
//   console.log(2)
// } else if (a > 0 || b > 0 || c > 0) {
//   console.log(1)
// } else (console.log(0));

function positive(a , b , c) {
  if (a > 0 && b > 0 && c > 0) {
    return 3;
  } else if (a > 0 && b > 0 || b > 0 && c > 0 || a > 0 && c > 0) {
    return 2;
  } else if (a > 0 || b > 0 || c > 0) {
    return 1;
  } else {
    return 0;
  }
}

elHeading.textContent = positive(a, b, c);