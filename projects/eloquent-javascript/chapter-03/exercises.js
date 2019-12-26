////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(num1, num2) {
//declare conditional statement that checks if num1 is less than num 2
if(num1 < num2) {
//if true return num1
  return num1;
//create else if that checks if num1 is greater than num2
} else if (num1 > num2) {
//if true return num2
  return num2;
//if the two numbers are equal return num1
} else return num1;
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num) {
//use modulo to check if numbers are even or odd
//declare if statement that checks if num is odd
if (num % 2 === 1) {
//if true return false
  return false;
//declare else if that checks if num is even
} else if (num % 2 === 0) {
//if true return false
  return true;
//declare else if that checks if num is negative, even or odd
} else if (num % 2 === -0 || num % 2 === -1) {
//if true return false
  return false;
}

}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) {
//declare var and assign it to 0
   var charCounter = 0;
//declare for loop that loops through every index of the string
    for (var i = 0; i < string.length; i++) {
//declare conditional statement 
//if any index of the string equals the char param add 1 to counter
        if (string[i] === char) {
            charCounter++;
        }
    }
//return charCounter
            return charCounter; 
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
//declare var and assign it to 0
    var beeCounter = 0;
//declare for loop and loop through every index of the string
    for (var i = 0; i < string.length; i++) {
//declare conditional
//if any index of the string strictly equals "B" add one to beeCounter
        if (string[i] === "B") {
            beeCounter++;

        }
    }
//return beeCounter
        return (beeCounter);
}
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
