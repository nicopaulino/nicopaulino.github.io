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

// [ ] Create a variable named animal and assign it to an empty object.
var animal = {};
// [ ] Using dot notation give animal a property named species with a value of any animal species.
animal.species = "whales";
// [ ] Using bracket notation give animal a property called name with a value of your animal`s name.
animal["name"] = "Willy";
// [ ] Using either notation, give animal a property called noises with a value of empty array.
animal.noises = [];
// [ ] Print your animal Object to the console by adding, console.log(animal);,
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// [ ] Create a variable named noises and assign it to an empty array.
var noises = [];
// [ ] Using bracket notation give noises it’s first element. A string representing a sound your animal might make.
noises[0] = "oowowowowo";
// [ ] Using an array function add another noise to the end of noises.
noises.push("ahhhwaha");
// [ ] Add an element to noises using this function.
noises.unshift("eeeowowow");
// [ ] Using bracket syntax again, add another element to the end of noises. 
noises[noises.length] = "iowiwoiwo";
// [ ] console.log the length of noises
console.log(noises.length);
// [ ] console.log the last element in noises again without hard coding the index.
console.log(noises.length - 1);
// [ ] console.log the whole array.
console.log(noises);





//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// [ ] Using bracket syntax, assign the noises property on animal to our new noises array.
animal["noises"] = noises;
// [ ] Using any syntax add another noise to the noises property on animal.
animal.noises.push("ieieieieieooooo");
// [ ] console.log animal.
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
// [ ] Create a variable named animals and assign it to an empty array.
var animals = [];
// [ ] push our animal that we created to animals.
animals.push(animal);
// [ ] console.log animals.
console.log(animals);
// [ ] Create a variable called duck and assign it to the data:
// { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
// [ ] push duck to animals
animals.push(duck);
// [ ] console.log animals. What does it look like?
console.log(animals);
// [ ] Create two more animal objects each with a species, a name, and at least two sounds sounds and add each one of them to `animals.
var monkey = {species: "monkey", name: "Bobo", noises: ["ooh", "ahahahaha"]};
var horse = {species: "horse", name: "Secretariet", noises: ["nay", "blplplplplp"]};
animals.push(monkey, horse);
// [ ] console.log animals, and, console.log the length of animals.
console.log(animals);



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//  Choose a data structure for this list of friends.

// I chose an array so it can show the names of the friends.

// [ ] Create a variable called friends and assign it to the data structure that you chose.
var friends = [];

// [ ] Write a function called getRandom that takes our animals array and returns the index of a random element using Math.random
function getRandom(arr) {
    // function returns a random element of the arr
    return arr[Math.floor(Math.random() * arr.length)];
}

// [ ] Using a random index from this function that you just created, get a random animal and add its name to friends.
friends.push(getRandom(animals).name);
// [ ] console.log friends.
console.log(friends);
// [ ] add friends as a property named friends on one of the animals in animals
getRandom(animals).friends = friends;
// [ ] console.log your work.
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
