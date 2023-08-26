// 16-masala Uchburchak shakli
var elHeading = document.querySelector("[data-heading]")
var a = +prompt("a tomon");
var b = +prompt("b tomon");
var c = +prompt("c tomon");

// if (a == b && b == c) {
//   console.log("equilateral")
// } else if (a == b || a == c || b == c) {
//   console.log("isosceles")
// } else (console.log("scalene"));

function side(a , b , c) {
  if (a == b && b == c) {
    return "equilateral"
  } else if (a == b || a == c || b == c) {
    return "isosceles"
  } else {
    return "scalene"
  }
}

elHeading.textContent = side(a , b , c);