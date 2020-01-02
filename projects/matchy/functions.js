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
// declare a function called search that has parameters named animals and name
function search(animals, name) {
// create a for loop that loops through the indices of the animals array
    for (let i = 0; i < animals.length - 1; i++) {
//create a conditional that checks if the name parameter exists in the array
        if (animals[i]["name"] === name) {
//if true, return the object with that name
            return animals[i];
        }
  }
//if false return null
  return null;
}



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//declare a function named replace that has three paramters, animals,, name, and replacement
function replace(animals, name, replacement) {
//declare a for loop that loops through the indices of the animals array
    for (let i = 0; i < animals.length - 1; i++) {
//declare conditional that checks if the name parameter exists in the array
        if (animals[i]["name"] === name) {
// if true splice the new object into my animals array
           animals.splice(animals[i], 1, replacement);
        }
    }
// Otherwise do nothing.
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// delcare a function called remove with parameters animals and name) 
function remove(animals, name) {
// declare a for loop that loops through the indices of the animals array
      for (let i = 0; i < animals.length - 1; i++) {
//declare a conditional that checks if the name parameter is in the array
        if (animals[i]["name"] === name) {
//if true remove the name object from the array
           animals.splice(animals[i], 1);
        }
    }
}
//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//declare function named add with two parameters
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
