// 11-masala Char sonmi?
var elHeading = document.querySelector("[data-heading]");
var a = +prompt("kirit");

// if (a >= 0) {
//   if (a <= 9) {
//     console.log("son")
//   }else (console.log("alpha"))
// } else (console.log("alpha"));

function numOrAlpha(a , b , c) {
  if (a >= b && a <= c) {
    return "son";
  } else {
    return "alpha";
  }
}

elHeading.textContent = numOrAlpha(a , 0  , 9);