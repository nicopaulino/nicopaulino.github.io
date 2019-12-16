/*
*
* FUNCTIONS:
*
* 0. Functions are reusabe blocks of code that accept inputs, process them, and return
*    a new data value.
*
* 1. Functiona are defined with the function keyword, followed by a name, 
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
*
* 10. Closures in functions control what is and isn’t in scope in a function,
* along with which variables are shared in the same containing scope.
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