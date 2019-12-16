// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
// declare contactObject & initiliaze it an object
let contactObject = {};
//push keys id nameFist and nameLast with pairs id nameFirst and nameLast
contactObject.id = id;
contactObject.nameFirst = nameFirst;
contactObject.nameLast = nameLast;
return contactObject;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
     //make contacts array and add all contacts put through makeContact
    var contacts = [];
    
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
    
    //make addContact key 
    "addContact": function(newContact){
    //make function that pushes newContact into contact
     contacts.push(newContact);
    },
    //make findContact key 
    "findContact": function(fullName){
    //make a for loop that runs through every part of contacts
        for (var i = 0; i < contacts.length; i++) {
          if (contacts[i].nameFirst + ' ' + contacts[i].nameLast === fullName) {   
        return contacts[i]; 
        }
     }
     return undefined;
    },
    "removeContact": function(contact) {
        //declare loop
        for (var i = 0; i < contacts.length; i++) {
            // declare conditional
          if (contacts[i] === contact) { 
              //return contacts.splic
        return contacts.splice(i, 1);
          }
    }

},
    "printAllContactNames": function(){
        //declare new array
        var strings = [];
        //declare for loop
        for (var i = 0; i < contacts.length; i++) {
        strings.push(contacts[i].nameFirst + " " + contacts[i].nameLast);
 }      //return strings.join
        return strings.join("\n");
// YOUR CODE GOES ABOVE HERE //

}}}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
