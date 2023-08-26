// if 1-masala 10 bilan taqqoslash
var elHeading = document.querySelector("[data-heading]");
var number = +prompt("soningni kirit");
var border = 10;
var result1 = number + 3;
var result2 = number * 2;
var result3 = 22;
// if (border < number) {
//   console.log(result1);
// } else if (border > number) {
//   console.log(result2);
// } else (console.log(result3))

function compare(number) {
  if (border < number) {
    return result1;
  } else if (border > number) {
    return result2;
  } else {
    return result3;
  }
}

elHeading.textContent = compare(number);