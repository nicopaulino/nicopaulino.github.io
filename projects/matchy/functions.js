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
    for (let i = 0; i < animals.length - 1; i++) {
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
// Takes 3 parameters, an Array, a name of an animal, and an Object that represents the replacement animal.

    for (let i = 0; i < animals.length - 1; i++) {
        if (animals[i]["name"] === name) {
    // splice the new object into my animals array
           animals.splice(animals[i], 1, replacement);
        }
    }
// If an animal with that name exists within the animals Array, replace it’s entire Object with the replacement Object.

// Otherwise do nothing.

}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Write a function called remove with a signature of remove(animals, name) that:

// Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.
function remove(animals, name) {
// If an animal with that name exists within the animals Array, remove it.
      for (let i = 0; i < animals.length - 1; i++) {
        if (animals[i]["name"] === name) {
    // splice the new object into my animals array
           animals.splice(animals[i], 1);
        }
    }
// Test that it works on the website.

}
//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal) {
//declare conditional that checks to see animal has name and species greater than 0
    if (animal.name.length > 0 && animal.species.length > 0) {
// declare for loop that runs through animals array
        for (let i = 0; i < animals.length; i++) {
//declare another condtitional inside conditional that checks if animal has the same name as another animal
            if (animals[i].name === animal.name) {
//return nothing if true
                return;
            }
        }
//push animal object into animals if not true
        animals.push(animal);
    }
}

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
