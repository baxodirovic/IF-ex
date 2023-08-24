// 16-masala Uchburchak shakli

var a = +prompt("a tomon");
var b = +prompt("b tomon");
var c = +prompt("c tomon");

if (a == b && b == c) {
  console.log("equilateral")
} else if (a == b || a == c || b == c) {
  console.log("isosceles")
} else (console.log("scalene"));