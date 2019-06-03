/**
* Part 1:
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505']
*     ['jasmine','1800-974-4539'],
*   ];
*
* jazbooks are not always sorted...
*
* Develop a function that takes in a jazbook and a name, searches through the jazbook and
* returns the persons phone number. If the person does not exists, return false.
*
* How efficient can you make this?

* Part 2: 
* Why are we storing names and phone numbers in an array?
* develop a function that takes in the poorly constructed jazbook and returns a proper phonebook 
* complete with methods to add new names and look up and remove existing entries
*/

//  return the number associated with the name in the jazbook


// trying for better than O(n) isn't worth it here since things might not be sorted
function findName(jazbook, name) {
  console.log(jazbook);
  for (let i = 0; i < jazbook.length; i++) {
    const entry = jazbook[i];
    console.log(`Entry: ${entry}`);
    if (entry[0] === name) return entry[1];
  }
  return false;
}

function PhoneBook(obj){
  this.obj = obj;
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook) {
  const obj = {};
  jazbook.forEach(entry => {
    obj[entry[0]] = entry[1];
  });
  const book = new PhoneBook(obj);
  return book;
}

PhoneBook.prototype.add = function(name, number) {
  // doesn't handle collisons, just over write same names
  this.obj[name] = number;
};

PhoneBook.prototype.findName = function(name) {
  if (this.obj[name]) return this.obj[name];
  return false;
};

PhoneBook.prototype.remove = function(name) {
  // doesn't confirm entry was there to begin with
  delete this.obj[name];
};

jazbook = [
  ["alex", "301-844-3421"],
  ["jae", "301-844-1211"],
  ["david", "301-844-0978"],
  ["travis", "301-844-8505"],
  ["jasmine", "1800-974-4539"]
];

const phonebook = new makePhoneBookObject(jazbook);

phonebook.add("sam","321654987")

console.log(phonebook.findName('sam'));
phonebook.remove('sam')
console.log(phonebook.findName('sam'));


const objectToExport = {
  findName,
  makePhoneBookObject
};
module.exports = objectToExport;
