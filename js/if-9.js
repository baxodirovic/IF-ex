// 9-masala Son 3 va 4 ga bo'linadimi?
var elHeading = document.querySelector("[data-heading]");
var a = +prompt("soningni kirit");
// var b = 12;
// var c = a % b;

// if (c == 0) {
//   console.log("true")
// } else (console.log("false"));

function divided(a , b) {
  if (a % b == 0) {
    return "true";
  } else {
    return "false";
  }
}

elHeading.textContent = divided(a , 12);