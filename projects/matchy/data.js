/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declare a variable and assign it an empty object
var animal = {};
// Use dot notation to add species property to object
animal.species = "whale";
//Use bracket notation to add name property to object
animal["name"] = "Willy";
// add noise property to object and make it an array
animal.noises = [];
// console log the whole object
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// declare variable named noises and assign it an empty array
var noises = [];
// Use bracket notation to give first index a string
noises[0] = "oowowowowo";
// Use push method to add another string to noises array
noises.push("ahhhwaha");
// Use unshift to add another string to array
noises.unshift("eeeowowow");
// Use bracket notation to add a string to the end of the array
noises[noises.length] = "iowiwoiwo";
// console.log the length of noises
console.log(noises.length);
// console log the last index in noises
console.log(noises.length - 1);
// console log the whole array.
console.log(noises);





//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Use bracket notation to create a noises property and assign it to the noises array
animal["noises"] = noises;
// add another noise to the noises property
animal.noises.push("ieieieieieooooo");
// console log the whole object
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * You can access proprties in an object using dot notation and bracket notation.
 * 2. What are the different ways of accessing elements on arrays?
 * You can access elements in arrays with string notation, accessing the desire index in an array.
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
// declare a variable named animals and assign it to an empty array.
var animals = [];
// push the animal object into the array
animals.push(animal);
// console log the animals array
console.log(animals);
// declare a variable called duck and assign it to an object
// give duck similar species, name, and noises properties
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
// push duck to animals array
animals.push(duck);
// console log the animals array
console.log(animals);
// declare two variables with different animals and format them similar to duck
var monkey = {species: "monkey", name: "Bobo", noises: ["ooh", "ahahahaha"]};
var horse = {species: "horse", name: "Secretariet", noises: ["nay", "blplplplplp"]};
//push the two new variables into the animals array
animals.push(monkey, horse);
// console log the animals array
console.log(animals);



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//  declare a variable named friends
// I chose an array so it can show the names of the friends.
var friends = [];
// Write a function called getRandom with an array parameter
function getRandom(arr) {
    // function returns a random element of the arr parameter
    return arr[Math.floor(Math.random() * arr.length)];
}
// Use getRandom to push a random animal into friends
friends.push(getRandom(animals).name);
//console log friends.
console.log(friends);
// add friends as a property to one of the animals in the array
getRandom(animals).friends = friends;
// console log the animals array
console.log(animals);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
