
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//declare function triangles with parameter x
function triangles(x) {
  for (var result = "#"; result.length <= x; result = result + "#")
console.log(result);

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//declare function fizzbuzz
function fizzBuzz() {
//declare for loop that runs through i
  for (var i = 1; i < 16; i++){
    //make a conditional statement
    //use modulo to get numbers divisible by 15 to print fizzbuzz
    //use modulo to get numbers divisible by 3 to print buzz
    //use modulo to get numbers divisible by 5 to print fizz
    if (i % 15 == 0) console.log("fizzbuzz");
    else if (i % 3 == 0) console.log("fizz");
    else if (i % 5 == 0) console.log("buzz");
    else console.log(i); 
}
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//declare function with parameter for the size of the chessboard
function drawChessboard(size) {
// declare empty string
var board = "";
//declare for loop that loops through size
  for (let i = 0; i < size; i++) { 
// declare another loop inside of loop
    for (var x = 0; x < size; x++) {
//create conditional that checks for even numbers
      if ((x+i) % 2 == 0) {
//if index is even, add a space
    board += " ";
//if index is odd, add a #
  }   else board += "#";
//add a line break at the end
    } board += "\n";
  
      }
//print chessboard to console
       console.log(board);
        }

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
