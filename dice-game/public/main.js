// const main = () => {
//   document.querySelector('h1').textContent += '?'
// }

// document.addEventListener('DOMContentLoaded', main)

const diceRoller = (sides) =>{
  let dieNumber = Math.floor((Math.random() * sides) + 1);
  console.log(dieNumber);
}

// number generators


// let d20Generator = () => {
// diceRoller(20)
// }

// let d12Generator = () => {
//   let dieNumber = Math.floor((Math.random() * 12) + 1);
//   console.log(dieNumber);
  
// }

// let d10Generator = () => {
//   let dieNumber = Math.floor((Math.random() * 10) + 1);
//   console.log(dieNumber);
  
// }

// let d8Generator = () => {
//   let dieNumber = Math.floor((Math.random() * 8) + 1);
//   console.log(dieNumber);
  
// }

// Dice event listeners
document.querySelector(".d6-button").addEventListener('click', () => diceRoller(6));
document.querySelector(".d20-button").addEventListener('click', () => diceRoller(20));
document.querySelector(".d12-button").addEventListener('click', () => diceRoller(12));
document.querySelector(".d10-button").addEventListener('click', () => diceRoller(10));
document.querySelector(".d8-button").addEventListener('click', () => diceRoller(8));