/*
*
* FUNCTIONS:
*
* 0. Functions are reusabe blocks of code that accept inputs, process them, and return
*    a new data value.
*
* 1. Functions are defined with the function keyword, followed by a name, 
* followed by parentheses ().
* 
* 2. The parameter may include parameter names separated by commas. 
*
* 3. The code to be executed is placed inside curly braces {}.
*
* 4. Parameters are placeholders for our arguments.
*
* 5. Arguments are what values we want to run through the function.
*
* 6. Functions have a local scope, meaning that variables created in a function can't be 
* accessed in the global scope (outside the function).
*
* 7. However, functions have access to variables created in the global scope.
*
* 8. Functions can optionally take inputs, meaning they don't need arguments.
* 
* 9. Functions don't have to return a value, they can print something to the console, 
*   change a variable, etc.
*/

function add(a, b) {
    return a + b;
}
console.log(add(2, 2)); // prints => 4

//You can also assign a function to a variable and call the variable name instead of the function name

var myFunction = function(a, b) {
    return a - b;
};
console.log(myFunction(4, 2)); // prints => 2

//Functions do not need to input any arguments to run. 
function printFive() {
  console.log(5);
}
printFive(); //prints => 5

// Funtions also do not need a return statement for their output.
function multiply(a, b) {
    console.log(a * b);
}
multiply(5, 2); //prints => 10

/*Each function has its own scope, meaning that variables assigned in a function can't be accessed
* outside of the function.
*/
 function subtract(a, b) {
     var mySub = a - b;
     return mySub;
 }
 console.log(mySub) // prints => Reference error: mySub is not defined
 
 /* Closures are the combination of a function with references 
 * to its surrounding state. A closure gives you 
 * access to the global scope or variables in a parent scope. 
 * They help to dictate what is and isn't in the proper scope.
 * All functions form closures'
 */
 function myName() {
     var name = "Nico Paulino"; //The variable name is inside myName function.
    function printMyName() {
        console.log(name); //Even though there is no name variable in this scope, it has access to the parent scope.
    }
    return printMyName(); //Outside of the second function we are going to return it.
 }
 var myNameVar = myName();
 myNameVar(); // prints => "Nico Paulino"