// 7-masala Musbat va Manfiy
var elHeading = document.querySelector("[data-heading]");
var a = +prompt("soningni kirit");


// if (a > 0) {
//   console.log("musbat")
// } else if (a < 0) {
//   console.log("manfiy")
// } else (console.log(0));

function posOrNeg(a) {
  if (a > 0) {
    return "musbat";
  } else if (a < 0) {
    return "manfiy";
  } else {
    return 0;
  }
}

elHeading.textContent = posOrNeg(a);