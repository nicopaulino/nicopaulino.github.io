// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-nicopaulino");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

//MALE COUNT

var maleCount = function(array) {
//declare a variable
//assign it to the filter method
 let arrayOfMales =  _.filter(array, function(customerObject, i, a){
//Have it filter through all of the customers who are 
        return customerObject.gender === "male";
    }); 
//The variable will be an array with all the male customers
//return the length of the array
    return arrayOfMales.length;
};

//FEMALE COUNT

var femaleCount = function(array) {
//declare a variable and assign it to the reduce method
//set seed to 0
  let arrayOfFemales = _.reduce(array, function(seed, currentObj, i){
//declare a conditional in the callback function
//if any of the genders of the customers are female, add 1 to seed
      if(currentObj.gender === "female") {
          seed++;
      }
//return seed
      return seed;
  }, 0);
 //the variable that was created now equals the number of female customers in the array
 //return the array
  return arrayOfFemales;
};

//OLDEST CUSTOMER

//declare a variable and assign it to return the reduce function
var oldestCustomer = (array) => {
    return _.reduce(array, (prevObj, currentObj) => {
//declare a conditional in the callback function
//if the previous object's age is greater than the current object's it will return the previous object
        if(prevObj.age > currentObj.age) {
            return prevObj;
        }
//if not it will return the current Object
//it will compare every object until it has found the object with the oldest age
        return currentObj;
    }).name;
};

//YOUNGEST CUSTOMER

//declare a variable and assign it to return the reduce function
var youngestCustomer = (array) => {
    return _.reduce(array, (prevObj, currentObj) => {
//declare a conditional in the callback function
//if the previous object's age is less than the current object's it will return the previous object
        if(prevObj.age < currentObj.age) {
            return prevObj;
        }
//if not it will return the current Object
//it will compare every object until it has found the object with the youngest age
        return currentObj;
    }).name;
};

//AVERAGE BALANCE

//declare a variable and assign it to an anonymous function
var averageBalance = (array) => {
//declare a count variable and ssign it to 0
    let count = 0;
//declare a total variable and assign it to the reduce function
//set seed to 0
  let total = _.reduce(array, (seed, currentObj, index) => {
//declare a conditional statement in the callback function
//check if the current Object's balance isn't a number
        if(isNaN(currentObj.balance)) {
//if true, take out the first index in the string ($) and convert it to a number
//add that number to seed
       seed += Number(currentObj.balance.replace(/[^\d.]/g, ''));
        }
//return seed
        return seed;
    }, 0);  
//run the each function through the array
    _.each(array, (e, i , a) => {
//for every elemnt in the array, add 1 to count
        if(e) {
            count++;
        }
    });
//return the total number divided by the count number
    return total / count;
};

//FIRST LETTER COUNT

//declare a variable and assign to an anonymous function
var firstLetterCount = (array, letter) => {
//return the reduce function
//set seed to 0
    return _.reduce(array, (seed, currentObj) =>{
//declare a conditional in the callback function
//check if the first index of the current object's name is the same as the letter parameter
//convert both to uppercase
        if(currentObj.name[0].toUpperCase() === letter.toUpperCase()) {
//if true add one to seed
            seed++;
        }
//return seed
        return seed;
    }, 0);
};

//FRIEND FIRST LETTER COUNT

//declare a variable and assign it to an anoymous function with array, customer, and letter parameters
var friendFirstLetterCount = (array, customer, letter) => {
//return the reduce function
//set seed to 0
    return _.reduce(array, (seed, currentObj) => {
//decare a conditional in the callback function
//check if the customer parameter is the same as the current Object's name
   if(customer === currentObj.name) {
//if true run the each function 
//set currentobject.friends and a callback function as the parameters 
   _.each(currentObj.friends, (e, i, a) => {
//declare a conditional in the callback function
//check if the first letter in the element's name is the same as the letter parameter
//convert both to upper case
        if (e.name[0].toUpperCase() === letter.toUpperCase()) {
//if true increment seed
            seed++;
        }
    });
//return seed
    } return seed;
    }, 0);
};

//FRIENDS COUNT

var friendsCount = (array, name) => {
//declare and assign a variable to an empty array
    let myArr = [];
//set up edge case, to see if name param is given
   if(!name){
//if conditional passes return an empty array
       return myArr;
   }
//iterate over the array param using the _.reduce method to access each customer object
    let finalFriendArr =  _.reduce(array, (seed, currentObj) => {
//iterate over the currentObj friends prop using the _.each method
         _.each(currentObj.friends, (friendObj, i, a) => {
//set up conditional statement to see if friendObj name prop matches the name prop
          if(friendObj['name'].toUpperCase() === name.toUpperCase()){
//if conditional passes push currentObj.name to seed
              seed.push(currentObj.name);
          }
       });
 //return seed, so at each iteration the value of seed is updated
       return seed;
    }, []);
//return finalFriendArr
    return finalFriendArr;
};

//TOP THREE TAGS

var topThreeTags = (array) => {
//assign and declare a variable to an empty array
    let result = [];
//iterate over the array param using the _.reduce method
let tagObj = _.reduce(array, (seedObj, currentObj, index) =>{
//iterate over the currentObj tags prop to access each element inside of that array
      _.each(currentObj.tags, (tag, i, a) => {
//set up conditional statment to check if tag is a key on the seedObj
//if conditional passes add one to seedObj[tag]
//if conditional does not pass assign seedObj[tag] to one
    (seedObj[tag]) ? seedObj[tag] += 1 : seedObj[tag] = 1;
      });
//return seedOnj, so at each iteration the value of seed is updated
      return seedObj;
    }, {});
//assign and declare a variable to an array using Object.keys()
    let tagObjKeys = Object.keys(tagObj);
    let sortArr = _.map(tagObjKeys, sortedTag => [sortedTag, tagObj[sortedTag]]).sort((a, b) => a[1] - b[1]).slice(-3);
    result.push(sortArr[0][0], sortArr[1][0], sortArr[2][0]);
//return result
    return result;
};

//GENDER COUNT

//declare a variable and assign it to an anonymous function with an array parameter
var genderCount = (array) => {
//declare a variable named Gender Object and assign it to an object
//add male, female, and non-binary properties and have their keys be 0
    let genderObject = {male: 0,
        female: 0,
        "non-binary": 0
    };
//use the filter function to loop through the array
 _.filter(array, function(customerObject, i, a){
//check if any of the customer's genders are male
        if (customerObject.gender === "male") {
//if true add one to the key of the male property in genderobject
           genderObject.male += 1; 
// then check if any of the customers genders are female
        } else if (customerObject.gender === "female") {
//if true add one to the key of the female property in gender object
            genderObject.female += 1;
//then check if any of the customers genders are non-binary
        } else if (customerObject.gender === "non-binary") {
//if true add one to the non-binary property in gender object
            genderObject["non-binary"] += 1;
        }
    }); 
//return the gender object
    return genderObject;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
