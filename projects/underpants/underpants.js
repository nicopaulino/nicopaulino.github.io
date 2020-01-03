// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

 _.identity = function(value) {
    return value;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value) {
//create conditional statement
//check if the value is an array
     if (Array.isArray(value)) {
       return "array";
//check if the value is undefined
   } else if (value === undefined) {
         return "undefined";
//check if the value is null
   } else if (value === null) { 
       return "null"; 
//check if the value is a date by seeing if its an object and has instance of Date
   } else if (typeof(value) === "object" && value instanceof Date) {
       return "date";
//Now that all the other objects are eliminated, check if value is an object by collection
   } else if (typeof(value) === "object") {
       return "object";
// for all other types just use typeof
   } else return typeof(value);
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(array, num) {
//create an empty array for the numbers to be pushed into
    let result = [];
//declare conditional to check if the array param isnt an array and if num is less than 0 
    if (Array.isArray(array) == false || num < 0) {
// if true return the empty array
        return result;
//if the num param is not a number, return the first index of the array
    } else if (isNaN(num)) {
        return array[0];
// if the num param is greater than the number of indices, return the whole array
    } else if (num > array.length - 1) {
        return array;
// for everything else, declare a for loop that loops through i all the way to num
    } else for (let i = 0; i < num; i++) {
//push the index of i in the array into the empty array
        result.push(array[i]);
//return the empty array
    } return result;
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, num) {
//create an empty array for the numbers to be pushed into in reverse order
let result = [];
//create empty array to unshift the first array into
let newResult = [];
//declare conditional to check if the array param isnt an array and if num is less than 0 
    if (Array.isArray(array) == false || num < 0) {
// if true return the empty array
        return result;
//if the num param is not a number, return the last index of the array
    } else if (isNaN(num)) {
        return array[array.length - 1];
// if the num param is greater than the number of indices, return the whole array
    } else if (num > array.length - 1) {
        return array;
// for everything else, declare a for loop that decrements through i
    } else {
        for (let i = array.length -1; i >= 0; i--) {
//push the index of i in the array into the empty result array
         result.push(array[i]);
//declare for loop that increments through x
    } for (let x = 0; x < num; x++) {
//unshift the x indices into newResult
        newResult.unshift(result[x]);
//return newResult array
    } return newResult;
        
    }
};


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
 _.indexOf = function(array, value) {
//declare for loop that loops through every index in the array
     for (let i = 0; i < array.length; i++) {
//declare conditional that checks if the i index of the array includes the value param
         if (array[i].includes(value) ) {
//if true return the index where it is at
             return i;
         }
//if false return -1
     } return -1;
 };

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value) {
//declare a condition that checks if the array param includes the value param
         if (array.includes(value)) {
//if true return true
             return true;
         } else {
//if not return false
             return false;
         }
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, action) {
//declare conditional statement and check if the collection param is an Array
    if(Array.isArray(collection)) {
// if true declare a for loop that loops through every index in collection
        for(var i = 0; i < collection.length; i++) {
//run action function through each index of collection
            action(collection[i], i, collection);
        }
//if not true declare a for in loop to loop though collection
    } else {
        for (var key in collection) {
//run action function through each index of collection
            action(collection[key], key, collection);
        }
    }
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array) {
//declare variable and use set object to delete duplicates from array
    let unique = [...new Set(array)];
//return unique variable that has all duplicates removed
    return unique;
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(collection, test) {
//declare variable with empty array
    var filtered = [];
//use each function with collection and an anon function
    _.each(collection, function (value, index, collection) {
//if the test runs true push the value from the anon function into filter array
        if (test(value,index,collection)) {
            filtered.push(value);
        }
    });
    return filtered;
};


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(collection, test) {
//declare a variable and run the filter function through collection and test params
    var newArr = _.filter(collection, test);
//declare an empty array
    var rejectArr = [];
//run each function through the collection and an anon function with index, element, and array params
    _.each(collection, function(e, i, a) {
//checkif the newArr variable includes the element from the anon function
        if (newArr.includes(e)) {}
//otherwise push e into rejected array
        else {rejectArr.push(e)}
    });
//return rejectArray
    return rejectArr;
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, funct) {
//create array for failed 
   var fail = [];
//create variable for passed that uses filter function
  var pass = array.filter((element, index, arr) => {
//if the function is true return true and push the element into fail array
    if (funct(element, index, arr)) 
        return true;
        fail.push(element);
  });
//return the fail and pass variables
  return [pass, fail];
};

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, action) {
//declare an empty array
    var mapped = [];
//use each function with the collectio param
    _.each(collection, function(element, index, collection) {
//push the results of the action function into the mapped empty array
      mapped.push(action(element, index, collection));
    });
//return mapped array
    return mapped;
};

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, prop) {   
//return the map function, with the array param and an anon function witha value param
    return _.map(array, function(value) {
//return the prop index of the value
        return value[prop];
    });
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
 
_.every = function(collection, func) {
//create a variabe with check
//Using the OR logical operator, if the func paramter is undefined (falsey) it will return the value 
    var check = func || _.identity; 
    for (var i = 0; i < collection.length; i++) { //run for loop thru collection
        if (!check(collection[i])) { //if collection[i] doesnt pass check return false
            return false;
        }
    }
    return true; //otherwise return true
  };

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func) {
     // very similar to above, except we're returning true if even one of them is true
   if (typeof func !== 'function') {
       for (let element of collection) {
           // remove the bang operator and return true
           if (element) return true; //return true
       }
        return false; //otherwise return false
   }
 let mapArr = _.map(collection, (element, position, collection) => func(element, position, collection));
   for (let ele of mapArr) {
       // take away the bang operator from above and return true, so if one is found, it returns true.
       if (ele) return true; //return true
   }
   return false; //otherwise return false
};


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed){
    let current = seed;
    // if current is not defined, we set current equal to the arrays 0 index
    if (current === undefined){
        current = array[0];
        // for loop to go through the array
        for (let i = 1; i < array.length; i++){
            // current will be equal to the function being performed on the value
            current = func(current, array[i], i);
        }
        return current; //return current
    }
    // if a seed is provided, we do a for loop, and use the function on the current(seed) and continue through
    for (let i = 0; i < array.length; i++){
       current = func(current, array[i], i);
    }
    return current; // return current
};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(obj) {
 _.each(arguments, function(item){ //takes _.each with arguments and function as parameters
  _.each(item, function(value, prop){ //_.each inside of each with different parameters
   obj[prop] = value; //objectproperty = value
  });
 });
 return obj; //return obj
};
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
