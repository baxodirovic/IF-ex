// 13-masala Hafta kuni
var elHeading = document.querySelector("[data-heading]")
var a = +prompt("soningni kirit");
// if (a == 1) {
//   console.log("Dushanba")
// } else if (a == 2) {
//   console.log("Senshanba")
// } else if (a == 3) {
//   console.log("Chorshanba")
// } else if (a == 4) {
//   console.log("Payshanba")
// } else if (a == 5) {
//   console.log("Juma")
// } else if (a == 6) {
//   console.log("Shanba")
// } else if (a == 7) {
//   console.log("Yakshanba")
// } else (console.log("none"));

function weekdays(a) {
  if (a == 1) {
    return "Dushanba";
  } else if (a == 2) {
    return "Senshanba";
  } else if (a == 3) {
    return "Chorshanba";
  } else if (a == 4) {
    return "Payshanba";
  } else if (a == 5) {
    return "Juma";
  } else if (a == 6) {
    return "Shanba";
  } else if (a == 7) {
    return "Yakshanba";
  } else {
    return "none";
  }
}

elHeading.textContent = weekdays(a);