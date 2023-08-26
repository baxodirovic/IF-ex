// 12-masala Katta yoki kichik alfavit
var elHeading = document.querySelector("[data-heading]");
var a = prompt("kirit");

// if (a >= "a") {
//   if (a <= "z") {
//     console.log("lowerCase")
//   }
// } else if (a >= "A") {
//   if (a <= "Z") {
//     console.log("upperCase")
//   }
// } else (console.log("none"));

function lowUpCase(a) {
  if (a >= "a" && a <= "z") {
    return "lowercase";
  } else if (a >= "A" && a <= "Z") {
    return "uppercase";
  } else {
    return "none";
  }
}

elHeading.textContent = lowUpCase(a);