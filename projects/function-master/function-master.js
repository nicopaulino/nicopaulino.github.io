//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
//declare empty array
 var newArr = [];
//declare for in loop to loop through object
 for (var key in object) {
//push the keys from the object into thr array
     newArr.push(object[key]);
     }
//return the array
     return newArr;
 }
//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
//delcare variable that equals all the properties in an object
  var myObj = Object.getOwnPropertyNames(object);
//declare empty string    
    var newString = "";
//delcare for loop that loops through myObj    
    for (var i = 0; i <= myObj.length - 1; i++) {
//put myObj into string with a space after each property
    newString += myObj[i] + " ";
    }
//slice out the last space at the end
    return newString.slice(0, -1);

} 

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
//declare array with all the values in my object
    var myObj = Object.values(object);
//declare an empty string
    var myString = "";
//loop through my array
    for (var i = 0; i <= myObj.length - 1; i++) {
//create a conditional that checks if the values in my array are a string
        if (typeof myObj[i] === "string") {
//if they are add it t my string with a space at the end
            myString += myObj[i] + " ";
        } 
// return my dtring and slice out the space at the end
    } return myString.slice(0, -1);
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
//create conditional statement
//if the arg is an array print array
    if (Array.isArray(collection)) {
       return "array"; 
//if the arg is null do nothing
   } else if (collection == null) {
         return;
//if the arg is a date do nothing
   } else if (typeof(collection) == "object" && collection instanceof Date) {
       return;
// if its a true object print object
   } else if (typeof(collection) == "object") {
       return "object";
// for all other types just use typeof
   } else return typeof(collection);
}



//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
// declare a string that equals the arg
var str = string;
//declare var that takes the first index of the string, capitalizes it, and takes out the original first index
var newStr = str.charAt(0).toUpperCase() + str.slice(1);
//return new String
return newStr;
    
}
//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
//split our param with a space
    string = string.split(" ");
//declare a for loop that loops through the string
    for (var i = 0; i < string.length; i++) {
//declare var that takes every index of the string, capitalizes it, and takes out the original index
        string[i] = string[i][0].toUpperCase() + string[i].slice(1);
    }
//return string joined with a space
    return string.join(" ");

}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
//declare variable that is the value of the name property
    var name = object.name;
//declare var that takes the 1st index of name, capitalizes it, and takes out the original index
    var newName = name.charAt(0).toUpperCase() + name.slice(1);
//declare var string that adds the phrase "Welcome" with name added and a "!" at the end
    var string = "Welcome " + newName + "!";
//return string
    return string;

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
//declare variable that is the value of the name property
    var name = object.name;
//declare var that takes the 1st index of name, capitalizes it, and takes out the original index
    var newName = name.charAt(0).toUpperCase() + name.slice(1);
//declare variable that is an empty string
    var string = "";
//delcare var that equals the species value in the object
    var species = object.species;
//declare var that takes the 1st index of species, capitalizes it, and takes out the original index
    var newSpecies = species.charAt(0).toUpperCase() + species.slice(1);
//return empty string var with the newName, concat it with " is a " and concat it with the newSpecies
    return string = newName + " is a " + newSpecies;
    
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
//create a conditional that checks if the noises property is an object and has a length
    if (Array.isArray(object.noises) && object.noises.length) {
//if true return noises as a string separated by a space
        return object.noises.join(" ");
    }
//if false return "there are no noises"
return "there are no noises";
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
//create a conditional statement 
//if the string param includes the word param in it return true
    if (string.includes(word)) {
        return true;
//if not return false
    } else return false;

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
//push name into the friends property
object.friends.push(name);
//return the object
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function isFriend(name, object) {
//declare conditional statement
//check if the friends value is an array and it includes the name param
    if (Array.isArray(object.friends) && object.friends.includes(name)) {
// if so return true
        return true;
//else return false
    } else return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
//declare an empty string named nameList
//declare an empty string named notFriends
var nameList = [];
var notFriends = [];
//declare var currentPerson
    var currentPerson;
//declare a for loop that loops through the array param
    for (let i = 0; i < array.length; i++) {
//create conditional in loop that checks if any of the idices equal the name param
        if (name === array[i].name) {
//if so have currentPerson equal the index in the array
        currentPerson = array[i];
        } 
//if false push the name param into the nameList
        else { nameList.push(array[i].name);
        }
    } 
//declare another for loop that loops through the name list array
    for (let x = 0; x < nameList.length; x++) {
//declare conditional that checks if current person doesnt have any of the names in friendslist
        if (currentPerson.friends.indexOf(nameList[x]) === -1) {
//if true push them into notFriends
            notFriends.push(nameList[x]);
        }
//return notFriends
    } return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
//add the valeu param to the key param of the object param
    object[key] = value;
//return the object
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
//declare a for loop that loops through the array
for (let i = 0; i < array.length; i++) {
//declare var list and add every index of the array to it
    var list = array[i];
//declare a for in loop and loop throught the object variable
    for (var key in object) {
//declare conditional in the loop that checks if the list var is equal to any key
        if (list === key) {
//if so delete the key
            delete object[key];
        }
    }
}
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
//declare a var with an empty array
    var arr =[];
//delcare a for loop that loops through the array param
for (var i = 0; i < array.length; i++) {
//declare a var list that equals every index of the array
    var list = array[i];
//declare conditional that uses indexOf to check if the element exists
    if (arr.indexOf(list) === -1) {
//if so push that element into arr. this gives us just the array without any duplicates
        arr.push(list);
    }
} 
//return the array
return arr;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}