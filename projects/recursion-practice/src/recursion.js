// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  //declare conditionl that checks if n is negative
  if (n < 0) {
//if true return null
    return null;
//if not check if the number equals 0
  } else if (n === 0) {
//if true return 1
    return 1;
  }
//return the number multiplied by the function with number - 1 as the argument
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
let sum = array => {
  //set base case that checks if the length of the array is 0
  if (array.length === 0) {
//if true return 0
    return 0;
//else return the first index of the array plus calling the array with the first index taken off
  } return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  //BRUH I DIDNT EVEN NEED TO DO THIS
//flatten array using concat and spread
  let flat = [].concat(...array);
    if (flat.length === 0) {
//if true return 0
    return 0;
//else return the first index of the array plus calling the array with the first index taken off
  } return flat[0] + sum(flat.slice(1));
  };

// 4. Check if a number is even.
var isEven = function(n) {
//set base case and check if the number is 0
  if (n === 0) {
//if true return 0
    return true;
//check other base case and see if the number is 1
  } else if (n === 1) {
//if true return false
    return false;
//check if the number is negative
  } else if (n < 0) {
//if true return the function with the number turned positive
    return isEven(-n);
// if the number is postivie return the function with the number minus two
  } else return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
//set base case and see if n is equal to 0
  if (n === 0) {
//if true return 0
    return 0;
  }
//if not check if n is negative
    if (n < 0) {
//if true return n plus 1 plus the calling the function and adding 1 to n
  return n + 1 + sumBelow(n + 1);
  } else {
//if the number is positive return n minus 1 plus calling the function and subtracting 1 from 1
    return n - 1 + sumBelow(n - 1);
    }
};
// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
//delcare variable empty and assign it empty string
  let empty = [];
//set base case and check if y - x equals 1 or 0
  if (y - x === 1 || y - x === 0) {
//if true return the empty array
    return empty;
  }
//if not use ternary operator that checks if y is greater than x
//if true subtract 1 from y
//if not add 1 to y
  y = y > x ? y - 1 : y + 1;
//then return a ternary operator that checks if y is equal to x
//if true return the array
//if not call the range function with x and y as arguments and concat y
  return y === x ? empty : range(x,y).concat(y); 
};


// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
//set base case to check if the exp param is equal to 0
   if (exp === 0) {
//if true return 1
     return 1; 
//then check if the exp is positive
   } if (exp > 0) {
//if so return the base times the exponent function with base and exp - 1 as the arguments
    return base * exponent(base, exp - 1);
      } else 
//if the exp is positive return the base times the exponent function with base and -1 times the exp - 1 as rhe arguments
        return 1 / (base * exponent(base, -1 * exp - 1));
      
   };
   

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
//set base cases to see if n is a power of 2
//if n is 1 return true
	if(n === 1){
		return true;
//if n is 0 return false
	} else if(n === 0){
		return false;
	} else {
// return the function with n divided by 2 as the argument
//the will keep divided n until it reaches one of the base cases
		return powerOfTwo(n / 2);
	}
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
//set base case to see if the string is an empty string
  if (string === '') {
// true return string
    return string;
//if not return the function
//for the argument out string in a substring and add the first index of string
} else return reverse(string.substr(1)) + string[0];
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = string => {
 string = string.toLowerCase();
  if(string.length === 1){
    return true;
  }else if(string[0] !== string[string.length-1]){
    return false;
  }
    return palindrome(string.slice(1,-1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
 
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
 if (x === 0 || y === 0) { 
    return 0; 
  } else if (y < 0) {
    return -x + multiply(x, y + 1);
  } else {
    return x + multiply(x, y - 1);
  }
};
//set base case to see if y or x is 0, if true return 0
//then check if y is negative
//if true return x as negative and add it to the function with x and y + 1 as arguments
//if y is positive, return x and add it to the function with x and y + 1 as arguments


// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
//set base case and check if the lengths of string 1 and 2 are 0
      if(str1.length === 0 && str2.length === 0){
//if so return true
        return true;
//then check if the first index of string 1 and 2 are the same
    } else if(str1[0] === str2[0]){
//if true return the function with string 1 and 2 as the functions but slice out the first index from both
        return compareStr(str1.slice(1), str2.slice(1));
    }
//if any of the indices dont equal eachother return false
    return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
//declare variable stringArray and assign it to an empty array
      var stringArray = [];
//set base case and check if the length of str is equal to 0
    if(str.length === 0) {
//if so return stringArray
        return stringArray;
    } else
//if not then push the first index of string into stringArray
    stringArray.push(str[0]);
//then return StringArrray and concat it with the function with string as the argument
//slice the first index off of string
    return stringArray.concat(createArray(str.slice(1)));

};

// 17. Reverse the order of an array
var reverseArr = function (array) {
//if there is no length of the array return the array
  if (!array.length) {
// true return string
    return array;
//if not return the function
//for the argument slice the first index of array out and concat it to the first index of array
} else return reverseArr(array.slice(1)).concat(array[0]);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
//declare variable array and assign it to an empty string
  let array = [];
//set base case and check if the length is 0
  if(length === 0) {
//if so return 0
  	return array;
  } else
//if not push value into array
  array.push(value);
//then return array and concat it with the function with value and length - 1 as arguments
  return array.concat(buildList(value, length -1));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
//set base case and check if the array length is 0
    if(array.length === 0) { 
//if true return 0
    	return 0;
   } else
//if not return the first index of array equal to value and add it with the function with the array and value as arguments
//slice the first index out of the array argument
    return (array[0] === value) + countOccurrence(array.slice(1), value);
};
// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
//set base case and check if the length of the array is equal to 0
  if(array.length === 1) { 
//if true return the callback with array as the argument
  	return callback(array); 
  } else
// if not return the callback with the first index of the array as the argument
//concat it with using the map function on array and the callback function
//slice the first index out of the array
    return [callback(array[0])].concat(rMap(array.slice(1), callback));
};
// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
//if n is negative return nul since it cant have a fibonacci number
    if(n < 0) {
    	return null;
//then chec base case to see if n is equal to 0
    } else if(n === 1) {
//if true return 1
		return 1;
	} else
// if not return the function with n -1 as an  argument 
//add that with the function with n - 2 as an argument
  	return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
//declare variable and assign it to an empty array
    let result = [];
//set base case and see if the length of input is 0
    if(!input.length) {
//if so return result
        return result;
    } else
//if not push the first index of input into result and capitalize it
    result.push(input[0].toUpperCase());
//then return the result array but concat it with the function with input as the argument
//slice the first index off of slice so every index will end up capitalized
    return result.concat(capitalizeWords(input.slice(1)));
};
// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
//declare result variable and assign it to an empty array
    let result = [];
//set base case and check if the length of array is 0
    if(!array.length) {
  //if so return result
      return result; 
    } else
//if not push the first index of array into result
//capitalize the first character in the index
    result.push(array[0].charAt(0).toUpperCase() + array[0].slice(1));
//return the result array but concat it with the function
//set array as the argument but slice off the first index
    return result.concat(capitalizeFirst(array.slice(1)));
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
  //GET HELP ON THIS ONE
    let result = Array.from(arguments)[1] || {};
    if(str.length === 0) {
        return result;
    }
    if(!result[str[0]]) {
        result[str[0]] = 1;
    } else
     {
        console.log(result[str[0]], 'hey');
        result[str[0]]++;
    }
    return letterTally(str.slice(1), result);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
//GET HELP ON THIS
  let result = [];
   if (list.length === 0) {
            return result;
        } 
        if (list.length === 1) {
            result.push(list[0]);
            return result;
        }
        if (list[0] !== list[1]) {
            result.push(list[0]);
        }
        return compress(list.slice(1), result);
    };


// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
// set base case to check if array length is 0
    if (!array.length) {
//if so return array
    return array; 
    } else 
//if not delcare conditional that checks if when the first array is sliced off if the new first index is 0 and if the first array is equal to 0
    if(minimizeZeroes(array.slice(1))[0] === 0 && array[0] === 0) {
// if so return the function with the array as the argument and with the first index sliced off
        return minimizeZeroes(array.slice(1));
    } else {
  //if not concat the first of the array with the function with the array as the argument and with the first index sliced off
        return [array[0]].concat(minimizeZeroes(array.slice(1)));
    }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
    if (array.length === 0) { return array; }
    if(array[0] < 0) { 
      array[0] = -array[0]; 
    }
    if(array[1] > 0) { array[1] = -array[1]; }
    return [array[0], array[1]].concat(alternateSign(array.slice(2)));
};
// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
      //create an object with num: value pair
    var myObj = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        0: 'zero'
    };
    //create variable set result to empty string
    var result = "";
    
  //base case
    if (str.length === 0) {
        return result;
    } else {
        var currentChar = str.charAt(0);
        if(myObj[currentChar]) {
            result = result + myObj[currentChar]
        }
        else {
            result = result + currentChar;
        }
    //return the recursive function with the substring 
        return numToText(str.slice(1));
        }
    //call the recursive helper with str as input
    // numToText(str);    
    //finally return the result
    return result;
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
