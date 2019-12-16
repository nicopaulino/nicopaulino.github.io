// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
   // Return a function;
   //make a parameter called x for the function we created;
    return function(x){
   // make cond. statement for if x is greater or less than base;
        if (x > base) {
        return true;
        } else if (x < base) {
            return false;
        }
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
 // YOUR CODE BELOW HERE //
   // Return a function;
   //make a parameter called x for the function we created;
    return function(x){
   // make cond. statement for if x is greater or less than base;
        if (x < base) {
        return true;
        } else if (x > base) {
            return false;
        }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    // return a function
     return function(x){
    // declare variables that turn th parameters to lowercase
       var start = startsWith.toLowerCase();
       var y = x.toLowerCase();
    // make a cond. statement that will return true if the first letter in x is the same as startsWith
        if (y[0] === start) {
        return true;
        } else if (y[0] !== start) {
            return false;
        }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    // return a function
   return function(x){
    // declare variables that turn th parameters to lowercase
       var start = endsWith.toLowerCase();
       var y = x.toLowerCase();
    // make a cond. statement that will return true if the first letter in x is the same as startsWith
        if (y[y.length - 1] === start) {
        return true;
        } else if (y[y.length - 1] !== start) {
            return false;
        }
    };
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    var a = [];
    //loop over strings array
    for (var i = 0; i < strings.length; i++) {
    //for each element in the array pass it to the modify function
    var modifiedString = modify(strings[i]); 
    //store the return value of that function in a new array 
    a.push(modifiedString);
    }
    //do this for every element in the strings array and then return the result set
      return a; 
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // Declare variable didPass
    var didPass = [];
    
    for (var i = 0; i < strings.length; i++) {
    //for each element in the array pass it to the modify function
     didPass.push(test(strings[i])); 
    
    //store the return value of that function in a new array 
    }
     return !didPass.includes(false);
 
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}