// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array){
//declare for loop that loops through every index of the array
  for(var i = 0;i < array.length; i++){
//declare conditional that checks if the index of the array is an array
    if (array[i] instanceof Array){
//
      Array.prototype.splice.apply(array,[i,1].concat(array[i]));
    } } return array;
}
// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, test, update, body) {
//declare for loop
//declare a variable with a given value (start)
//check our stopping condition (test)
    //if the stopping condition is false it breaks out of the loop
    //if its true it will run the code block
//increment / decrement our value (update)

   for (var i = start; test(i); i = update(i)) {
     body(i);
   }
 }

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
//declare for of loop that runs through every element in array
  for (var element of array) {
//declare conditional that checks if any element in test is false
    if (test(element) === false) {
//if true return false
      return false;
    }
//if not return true
  } return true;
}
// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({
        name,
        count: 1
      });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function dominantDirection(string) {
    //use the countBy function to find all the scripts
    let scriptsArr = countBy(string, function(char) {
    //find the associative script for each character
    let script = characterScript(char.codePointAt(0));
    //check if the script is an actual script and not a symbol==
    //the countBy function will return an array of objects w/ dominate direction and count
    if(script) {
        return script.direction;
    }
    return null;
    });
    //using the array sort method, sort each object by its count property
    scriptsArr.sort(function(a, b) {
        return b.count - a.count;
    });
    return scriptsArr[0].name;
}
// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
