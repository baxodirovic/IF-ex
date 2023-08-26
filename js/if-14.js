// 14-masala Uchburchakning burchaklari
var elHeading = document.querySelector("[data-heading]")
var a = +prompt("a burchak");
var b = +prompt("b burchak");
var c = +prompt("c burchak");

// if (a + b + c == 180) {
//   console.log("true")
// } else if (a < 0) {
//   console.log("false")
// } else if (b < 0) {
//   console.log("false")
// } else if (c < 0) {
//   console.log("false")
// } else (console.log("false"));


function corner(a , b , c) {
  if (a + b + c == 180) {
    return "true";
  } else if (a < 0 || b < 0 || c < 0) {
    return "false";
  } else {
    return "false";
  }
}

elHeading.textContent = corner(a , b , c);