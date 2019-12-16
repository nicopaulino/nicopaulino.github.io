// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    //initialize var rangeArray and declare it an Array
     var rangeArray = [];
     // make an if statement for if the start param is lower than end
    if (start < end) { 
    //make a for loop that runs number from start to end
    for (var i = start; i < end + 1; i++){ 
    // push i into the rangeArray array
        rangeArray.push(i);
        } return rangeArray;
    // make an else if statement for if end is lower than start
    } else if (start > end) {
    //make a for loop that runs numbers from end to start
        for (var i = start; i > end - 1; i--){
    // push i into rangeArray
            rangeArray.push(i);
            } return rangeArray;
    } 
    }
    
    
    // YOUR CODE GOES ABOVE HERE //






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}