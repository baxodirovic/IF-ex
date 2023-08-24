// jonibek masalasi
var elH = document.querySelector("#info");
var costFly = 500;
var costHost = 250;
var costEntertain = 120;
var dollar1 = 10996.96;
var euro1 = 11181.36;
var costFlySum = dollar1 * costFly;
var costHostSum = dollar1 * costHost;
var costEntertainSum = euro1 * costEntertain;
var fullCost = costFlySum + costHostSum + costEntertainSum;
var jonibek = +prompt("Jonibek qancha puling bor");

if (jonibek >= fullCost) {
  elH.textContent = "Oq yo’l, Jonibek!";
} else {
  elH.textContent = "Jonibek, Shahzoddan so’ra, balki berar! U ham bermasa bollardan so’ra! Ularam bermasa uyda telefonda kino ko’r.";
}

