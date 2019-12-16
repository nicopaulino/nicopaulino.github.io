/*
* STRING MANIPULATION:
*   
*   0. In Javascript, strings can be manipulated using either operators or methods.
*
*   1. The main operator used to manipulate strings is (+), allowing you to 
*   concat strings with other strings.
*
*   2. there are several different methods that manipulate strings, including:
*        - (.length)
*        - (indexOf())
*        - (search())
*        - (slice())
*/

    //STRING MANIPULATION USING OPERATORS
    
        //Using the plus operator (+), you can concat strings with other strings.
        var myString = "Hello Nico";
        var myStringTwo = ", nice to meet you!";
        var myStringThree = myString + myStringThree;
        console.log(myStringThree); //prints "Hello Nico, nice to meet you!"
        // Note: you can't use (-) or other arithemetic operators similarly.
        
    //STRING MANIPULATION USING METHODS
    
        //.length
            
            /* You can use the .length method on any string and it will provide the length
            * of your entire string.
            */
            console.log(myStringThree.length); //prints => 29
            
        //indexOf()
        
            /* The indexOf method will return the index number of the first occurence
            * for whatever phrase you search for in your string.
            */
            console.log(myStringThree.indexOf("Nico")); // prints => 6
            
        //search()
        
            //The search() method searches a string and returns the position of the match.
            console.log(myStringThree.search("Nico")); //prints => 6
            
        //slice()
            
            /*The slice() method takes 2 parameters: the start position, and the end position.
            * The first parameter is the index where you want it to start slicing,
            * and the second parameter is where you want it to stop.
            * It then slices out a part of a string and returns the extracted part in a new string.
            */
            var myStringFour = myStringThree.slice(6, 10);
            console.log(myStringFour); //prints "Nico"
            
            
            
            