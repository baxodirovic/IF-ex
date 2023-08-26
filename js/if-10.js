// 10-masala Kabisa yili
var elHeading = document.querySelector("[data-heading]");
var a = +prompt("yilingni kirit");
// var b = a % 4;
// var c = a % 100;

if (b == 0) {
  console.log("true")
} else if (c == 0) {
  console.log("false")
} else (console.log("false"));

function kabisa(a , b , c) {
  if (a % b == 0 || a % c == 0) {
    return "true";
  } else {
    return "false";
  }
}

elHeading.textContent = kabisa(a , 4 , 100);