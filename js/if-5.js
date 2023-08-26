// 5-masala ikkita sondan kattasi
var elHeading = document.querySelector("[data-heading]");
var a = +prompt("a son");
var b = +prompt("b son");
// if (b > a) {
//   console.log(`katta son ${b}`)
// } else if (b < a) {
//   console.log(`katta son ${a}`)
// } else (console.log("Voy ular tengku"));

function bigger(a , b) {
  if (b > a) {
    return `katta son ${b}`;
  } else if (b < a) {
    return `katta son ${a}`;
  } else {
    return "Voy ular tengku";
  }
}

elHeading.textContent = bigger(a , b);