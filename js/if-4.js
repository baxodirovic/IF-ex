// 4-masala juft ypki toq son
var elHeading = document.querySelector("[data-heading]");
var a = +prompt("soningni kirit");
// var b = a % 2;
// var c = 0;
// if (a % 2 == 0) {
//   elH.textContent = "juft"
// } else (elH.textContent = "toq")

function couple(a , b) {
  if (a % 2 == 0) {
    return "juft";
  } else {
    return "toq";
  }
}

elHeading.textContent = couple(a);