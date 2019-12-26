/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

//LET AND CONST //

//Instead of var, we can use let or const to assign value to variables. They aren't similar in every way.

    //LET //
        
        //Let declares a block scope local variable.
        let myLastName = "Paulino";
        //Let can be reassigned.
        myLastName = "Pablo";
        console.log(myLastName); //prints => "Pablo"
        // However it can't be redeclared.
       // let myLastName = "West";
        console.log(myLastName); //prints => error
        
    //CONST //
        
        /*Similar to let, const declares a block scoped variable.
        * Const cannot be reassigned or redeclared.
        * Const must be assigned at the moment of initialization.
        * example: (Example is in comments to prevent error.)
        * const myFirstName;
        * myFirstName = "Nico";
        * console.log(myFirstName); //prints => error
        */
        
//HOISTING

    /* 0. When a variable is hoisted, it means that the declaration of the variable 
    * is sent to the top of the code (the imaginary 0th line that the computer reads first).
    *
    *
    * 1. For variables declared with var, ONLY the declaration of the variable 
    * is hoisted to the top. The value of the variable isn't available until the 
    * line it's initialized. 
    */
    console.log(food); //prints => undefined
    var food = "yummy"; 
    console.log(food); // prints => "yummy"
    
    // Variables declared with const or let DO NOT hve their declaration or assignment hoisted.
    console.log(hello);
    const hello = "Hello, good sir";
    console.log(hello); // prints => Refernece Error: hello is not defined.