// Booleans can either be true or false, and are used to help program logic. 
// Named after George Boole, who defined this theory of logic. 
// let boolean = false;

// function changeText() {
//   if (boolean === false) {
//     document.getElementById("text").innerHTML = "False";
//     boolean = true;
//   }
//   else {
//     document.getElementById("text").innerHTML = "True";
//     boolean = false;
//   }
// }

const pv = 19270;
const r = 0.039;
const n = 48;

const p = (r * pv) / (1 - (1 + r)^-n);
console.log(p);