/*
* CONTROL FLOW: 
*
* 0. Control flow is the order in which a statement or function is executed.
*
* 1. In a chain, like a conditional statement, the first time a block of code executes, the 
* rest of the chain is ignored.
*
* 2. If you have a conditional that has two different true statements, whichever 
* statement is first will be executed.
*
* 3. If and else if statements read from top to bottom.
*/

//IF STATEMENTS:
    
    //Runs a specific block of code if the condition is true.
    if(5 == '5') { //The condition is in parentheses 
        console.log("This worked!"); //the block of code to execute is in curly braces
    } //prints => "This worked!"
    
//ELSE IF STATEMENTS:

    //Can be added to an if statement to check if another block of code is true.
    if (5 === '5') {
        console.log("This worked!"); //This condition is false so the code will not execute
    } else if (5 == '5') { //this condition is true so the code block will be executed.
        console.log("This actually worked!");
    } //prints => "This actually worked!"
    //You can have an unlimited amount of else if statements in a chain.
    
//ELSE STATEMENTS

    /*Can be added to the end of your conditional statment in case all other conditions fail.
    * They do not need a condition.
    */
    if (5 === '5') {
        console.log("This worked!"); //This condition is false so the code will not execute
    } else if (5 == '6') {
        console.log("This also worked!");//This condition is false so the code won't execute
    } else {console.log("None of them worked!")}
    
//SWITCH STATEMENTS

    // Switch statements are essentially another way to write conditional statements. 
    var x = 60;
  switch(x) { //The datatype in the parentheses in switch is the expression that's being checked.
  case 55: // The datatype after case is comparing it to the expression in switch
  //If the case is true it will run the following code:
    console.log("The number is 55"); 
  // After stating what code you want to run type break; to go into the next condition.
    break;
  // You can have an unlimited amount of cases.
  //Think of it as your if / else if statement
  case 60: 
    console.log("The number is 60");
    break;
  //After all your cases you can add a default.
  default: 
  //This is similar to an else statement.
  //It will run if none of your cases are true.
    console.log("The number is not 55 or 60");
   } //prints => "The number is 60"

    /*You can use switch statements instead of if statements when you're comparing muliple
    * conditions of an expression and the expression itself is non-trivial.
    */