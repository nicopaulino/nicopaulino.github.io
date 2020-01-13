/*
* STRING MANIPULATION:
*   
*   0. In Javascript, strings can be manipulated using either operators or methods.
*
*   1. The main operator used to manipulate strings is (+), allowing you to 
*   concat strings with other strings.
*
*   2. there are several different methods that manipulate strings, including:
*
*        - (indexOf())
*        - (search())
*        - (slice())
*        - (concat())
*        - (charAt())
*        - (split())
*/

    //STRING MANIPULATION USING OPERATORS
    
        //Using the plus operator (+), you can concat strings with other strings.
        var myString = "Hello Nico";
        var myStringTwo = ", nice to meet you!";
        var myStringThree = myString + myStringThree;
        console.log(myStringThree); //prints "Hello Nico, nice to meet you!"
        // Note: you can't use (-) or other arithemetic operators similarly.
        
        //You can also use the += operator as a more efficient way of doing the name thing.
        var message = "Howdy yall, ";
        message += "how bout them Cowboys?";
        console.log(message); // prints => "Howdy yall, how bout them Cowboys?"
        
    //STRING MANIPULATION USING METHODS
    
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
            console.log(myStringFour); //prints => "Nico"
        
        //concat()
            
            //This method joins two strings together, similar to adding them.
            var str1 = "Who ";
            var str2 = "Dat!";
            var str3 = str1.concat(str2);
            console.log(str3); //prints => "Who Dat!"
            
        //charAt()
        
            //This method return a specific character at the specified index.
            var str4 = str3.charAt(0);
            console.log(str4); // prints => "W"
            
        //split()
        
            //The split() method splits a string into an array of many substrings.
            //In the parenthese you put whatever character you want to be replaced with where the array index splits.
            //Usually this is a space.
            
            var split = str3.split(" ");
            console.log(split); // prints => ["Who", "Dat!"]
            
            
            