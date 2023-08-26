// 8-masala son 5 ga bo'linadimi?
var elHeading = document.querySelector("[data-heading]");
var a = +prompt("soningni kirit");
// var b = a % 5;
// if (b == 0) {
//   console.log("true")
// } else (console.log("false"));

function remainable(a , b) {
  if (a % b == 0) {
    return "true";
  } else {
    return "false";
  }
}

elHeading.textContent = remainable(a , 5);