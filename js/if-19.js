// 19-masala O'rtacha qiymat

var elHeading = document.querySelector("[data-heading]");
var a = +prompt("a son");
var b = +prompt("b son");
var c = +prompt("c son");
// var middle = (a + b + c)/3;
// elH.textContent = middle;


function average(a , b , c) {
  return (a + b + c)/3;
}

elHeading.textContent = average(a , b , c);