// 29-masala son yasash

var a = +prompt("a son");
var b = +prompt("b son");
var c = +prompt("c son");


console.log(`${a}${b}${c}`)

// if (a == 0 || b == 0 || c == 0) {
//   console.log(0)
// }


function numMake(a , b , c) {
  if (a == 0 || b == 0 || c == 0) {
    return 0
  }
}

console.log(numMake(a , b , c));