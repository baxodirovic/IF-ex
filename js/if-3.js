// 3-masala Qoldig'ini aniqlash
var elHeading = document.querySelector("[data-heading]");
var a = +prompt("soningni kirit");
var b = 3;
// var b = a % 3;
// console.log(b);

function remain(a , b) {
  return a % b;
}

console.log(remain(a , b));