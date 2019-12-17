/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Implement a function called search with a signature of search(animals, name) { //... } that:
function search(animals, name) {
// Takes a paramater representing an Array of animals.
    for (var i = 0; i < animals.length; i++) {
        if (animals[i]["name"] === name) {
            return animals[i];
        }
  }
  return null;
}

// Looks through the animals Array, and returns the animal’s Object if an animal with that name exists.

// Returns null if no animal with that name exists



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Write a function called replace with a signature of replace(animals, name, replacement) { //... } that:
function replace(animals, name, replacement) {
// Takes 3 parameters, an Array of animals, a name of an animal on which to perform a search, and an Object that represents the replacement animal.

// If an animal with that name exists within the animals Array, replace it’s entire Object with the replacement Object.

// Otherwise do nothing.

// Test it on the website.
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
