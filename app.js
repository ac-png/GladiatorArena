import Gladiator from "./classes/Gladiator.js";
import Arena from "./classes/Arena.js";

// let max = new Gladiator("Maximus", "Trident");
// console.log(max.name);
// console.log(max.weapon);

// let j = new Gladiator("Jesse", "Donut");
// console.log(j);

// let colesseum = new Arena("Colosseum");
// console.log(colesseum.gladiators);

// let colesseum = new Arena("Colosseum");
// console.log(colesseum.gladiators);

// let max = new Gladiator("Maximus", "Trident");
// let colesseum = new Arena("Colosseum");
// colesseum.addGladiator(max);
// console.log(colesseum.gladiators);

// let max = new Gladiator("Maximus", "Trident");
// let titus = new Gladiator("Titus", "Spear");
// let andronicus = new Gladiator("Andronicus", "Spear");
// let colesseum = new Arena("Colosseum");
// colesseum.addGladiator(max);
// colesseum.addGladiator(titus);
// colesseum.addGladiator(andronicus);
// console.log(colesseum.gladiators.length);

let max = new Gladiator("Maximus", "Trident");
let titus = new Gladiator("Titus", "Spear");
let colesseum = new Arena("Colosseum");
colesseum.addGladiator(max);
colesseum.addGladiator(titus);
colesseum.fight();
console.log(colesseum.gladiators);