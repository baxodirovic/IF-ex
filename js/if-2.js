// 2-masala Butun qism
var elHeading = document.querySelector("[data-heading]");
var number = +prompt("soningni kirit");
var c = 3;
// var d = a / c;
// var b = d.toFixed(0);
// console.log(b)

function remained(a , b) {
  return a / b;
}

console.log(remained(number , c).toFixed(0));