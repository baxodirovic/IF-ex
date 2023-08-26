// 6-masala a,b,c, katta son
var elHeading = document.querySelector("[data-heading]");
var a = +prompt("a son");
var b = +prompt("b son");
var c = +prompt("c son");


// if (a > b) {
//   if (a > c) {
//     console.log(`katta son a=${a}`)
//   } else (console.log(`katta son c=${c}`))
// } else if (b > a) {
//   if (b > c) {
//     console.log(`katta son b=${b}`)
//   } else (console.log(`katta son c=${c}`))
// }

function biggest(a , b , c) {
  if (a > b) {
    if (a > c) {
      return `katta son a=${a}`;
    } else {
      return `katta son c=${c}`;
    }
  } else if (b > a) {
    if (b > c) {
      return `katta son b=${b}`;
    } else {
      return `katta son c=${c}`;
    }
  }
}

elHeading.textContent = biggest(a , b , c);
