// 17-masala Nechtasi musbat

var a = +prompt("a son");
var b = +prompt("b son");
var c = +prompt("c son");

if (a > 0 && b > 0 && c > 0) {
  console.log(3)
} else if (a > 0 && b > 0 || b > 0 && c > 0 || a > 0 && c > 0) {
  console.log(2)
} else if (a > 0 || b > 0 || c > 0) {
  console.log(1)
} else (console.log(0));