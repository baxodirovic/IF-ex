// 15-masala Uchburchak tomonlari
var elHeading = document.querySelector("[data-heading]")
var a = +prompt("a tomon");
var b = +prompt("b tomon");
var c = +prompt("c tomon");

// if (a < b + c && b < a + c && c < a + b) {
//   console.log("true")
// } else (console.log("false"));

function triangleSide(a , b ,c) {
  if (a < b + c && b < a + c && c < a + b) {
    return "true"
  } else {
    return "false"
  }
}

elHeading.textContent = triangleSide(a , b , c);

