////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, additional) {
  // declare variable with an empty array
  //declare var with same value as start
  //declare var with same value as end
var rangeArray = [];
var counter = start;
var counterEnd = end;
//declare condtional that checks if start and end have the same value or if additional is negative
if (start === end || additional < 0) {
//if true return the empty string
    return rangeArray;
} // if not true check if additional is greater than 0
else if (additional >= 0) {
  var rangeArray2 = [start, start + additional, end];
  return rangeArray2;
} //if additional is not used, just check if start is less than end
else if (start < end) {
  //declare while loop
    while (counter <= counterEnd) {
  //push counter into rangeArray
    rangeArray.push(counter);
  //increment counter
    counter++;
  //return rangeArray
  } return rangeArray;
 //declare else if that checks if start is greater than end
} else if (start > end) {
  //delcare while loop
    while (counter >= counterEnd) {
  //push counterEnd into rangeArray
    rangeArray.push(counterEnd);
  //increment counterEnd
    counterEnd++;
  //return rangeArray
    } return rangeArray;
}
}


////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arr) {
  //declare var and assign it to 0
  var add = 0;
  //declare while loop that checks if the length of the array is greater than 0
  while (arr.length > 0) {
  //concat the numbers in array into add
    add += arr.pop();
  } //return add
return add;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
//declare a var and assign it an empty array
var newArray = [];
//declare a for loop that decrements i
for (var i = array.length - 1; i > -1; i--) {
//push the index of i of the array param into the newArray
  newArray.push(array[i]);
//return newArray
} return newArray;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function reverseArrayInPlace(array) {
  //iterate thru half of original array
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var oldArray = array[i]; //cache original i value
    array[i] = array[array.length - 1 - i];
  //set i value to its opposite from end
    array[array.length - 1 - i] = oldArray; 
  //set opposite to be original i value
  //return array
  } return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
//declare an empty object
  var list = {};
//declare a for loop that loops through i until it reaches the array length
 for (var i = 0; i < array.length; i++) {
  //add key value ro list and assign it to the index in the array
    list.value = array.splice(0, 1)[0];
    
    list.rest = (array.length > 0) ? arrayToList(array) : null;
 //return List
 } return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function listToArray(list) {
//declare var and assign it an empty array
    let arr = [];
//declare for loop
    for(; list !== null; list = list.rest) {
//push the value key of list into arr
      arr.push(list.value);
//return arr
    } return arr;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(ele, list){
//declare var and assign it to call the listToArray func
  var func = listToArray(list);
//unshift the first argument from the variable
  func.unshift(ele);
//reassign variable with the arrayToList function using the new func variable
  func = arrayToList(func);
//return func variable
  return func;
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//
function nth(list, num) {
//declare for loop
for (var i = list; i; i = i.rest) {
//declare var and assign it the listToArray function with i as the argument
    var temp = listToArray(i);
//return temp variable with num as the specific index
    return temp[num];
}
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
  //declare conditional that checks if x and y are the same
  if (x === y) {
  //is so return true
    return true;
  //if not true check if x and y are objects and not null 
  } else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
  //if so delcare another conditional that checks if the length of object.keys x and y are not the same
    if (Object.keys(x).length != Object.keys(y).length)
  // if true return false
      return false;
//declare for in loop that runs through the keys in x
    for (var key in x) {
//declare conditional that checks if y has any of the keys in x
      if (y.hasOwnProperty(key)) {
      //if true declare conditional that checks if x and y have any of the same keys
        if (! deepEqual(x[key], y[key]))
          return false;
      }else return false;
    } return true;
  } else return false;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
