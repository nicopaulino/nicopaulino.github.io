/*
* LOOPS:
* 
* 0. Loops perform or utter an action repeatedly.
*
* 1. They're important so we can perform an action a specific number of times.
*
* 2. There are three main kinds of loops:
*   - While loops
*   - For loops
*   - For in loops
* 
* 3. For and while loops all have startng an stopping conditions.
*
* 4. Starting conditions tell your code when to start executing.
* 
* 5. Stopping conditions tell your code when to stop.
*
* 6. Make sure to properly set your stopping condition or your code may never stop running!
*/

//WHILE LOOPS 
    
    //Loops through a block of code as long as a specified condition is true.
    var whileLoop = 1;
    while (whileLoop < 10) {
        console.log(whileLoop++);
    }// prints numbers 1 - 9 on separate lines 
    
//FOR LOOPS

    // Similar to while loops, but the starting condition can be in the same scope.
    for (var i = 0; i < 5; i++) 
        //this is your initialized variable, with stopping condition and increment
        {console.log("yo!")} // this is the code you want to run
        //prints "yo!" five times on separate lines
    
//FOR IN LOOPS
    
    // Loops through the properties of an object.
    var me = {"firstName": "Nico", "lastName": "Paulino"}; 
    for (var key in me) {console.log(me[key])} // prints => "Nico" "Paulino"
    
//LOOPING OVER AN ARRAY

    /* To loop through a string, you can use a for loop.
    * - set your starting condition to the first index you want to loop through.
    * - set your stopping condition to the last index you want to loop through.
    * - Either increment or decrement.
    */
    var myStringArray = ["Hello","World", "This", "Is", "My", "String"];
    for (var i = 0; i < myStringArray.length; i++) {
    console.log(myStringArray[i]) } //prints ever index of the string on a separate line
