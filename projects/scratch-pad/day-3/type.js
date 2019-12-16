// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    //declare variable arrayTest and initialize it to see if my vaue is an object 
    let arrayTest = Array.isArray(value);
    return arrayTest;
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    // make an if statement for if value is an Array
   if (Array.isArray(value)) {
       return false; 
     // Next check and see if its null
   } else if (value == null) {
         return false;
    // check if it is a date
   } else if (typeof(value) == "object" && value instanceof Date) {
       return false;
       //check if it is a true object
   } else if (typeof(value) == "object") {
       return true;
   } else return false;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    //make an if statement to see if my value is an array
   if (Array.isArray(value)) {
       return true; 
   } else if (value == null) {
       // check if its null
         return false;
   } else if (typeof(value) == "object" && value instanceof Date) {
     //check if its a date
     return false;
     //check if its a true object
   } else if (typeof(value) == "object") {
       return true;
   } else return false;

    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    //Do all of the first steps as my isObject but have them return their data type
 if (Array.isArray(value)) {
       return "array"; 
   } else if (value == null) {
         return "null";
   } else if (typeof(value) == "object" && value instanceof Date) {
       return "date";
   } else if (typeof(value) == "object") {
       return "object";
      // for all other types just use typeof
   } else return typeof(value);
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
