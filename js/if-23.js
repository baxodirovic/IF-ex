// 23-masala Son o'qidagi a nuqta

var elHeading = document.querySelector("[data-heading]");
var a = +prompt("a son");
var b = a * -1;

// if (a > 0) {
//   elH.textContent = a
// } else if (a < 0) {
//   elH.textContent = b
// } else (elH.textContent = 0);

function aDot(a) {
  if (a > 0) {
    return a
  } else if (a < 0) {
    return a * -1;
  } else {
    return 0;
  }
}

elHeading.textContent = aDot(a);