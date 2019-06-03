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
function findName(jazbook, name) {
  for (let i = 0 ; i < jazbook.length ; i++){
    if (jazbook[i][0] === name) return jazbook[i][1];
  }
return false;
}

// return an object literal representing the jazbook
const makePhoneBookObject = function () {
  return {
    proper: {},
    cleanUp: function (poorBook) {
      for (let i = 0 ; i < poorBook.length ; i++){
        console.log(this.proper)
        this.proper[poorBook[i][0]] = poorBook[i][1];
      }
      return this.proper;
    },
    remove: function (poorBook, name) {
      let cleaned = this.cleanUp(poorBook);
      if (cleaned[name]) delete cleaned[name]
      return cleaned;
    },
    addNew: function (poorBook, name, number){
      let cleaned = this.cleanUp(poorBook);
      cleaned[name] = number;
      return cleaned;
    },
    lookUp: function (poorBook, name){
      let cleaned = this.cleanUp(poorBook);
      if (cleaned[name]) return true;
      else return false;
    }
  }
}

const fone = new makePhoneBookObject();

const jazbook = [
  ['alex','301-844-3421'],
  ['jae','301-844-1211'],
  ['david','301-844-0978'],
  ['travis','301-844-8505'],
  ['jasmine','1800-974-4539'],
  ];


// console.log(findName(jazbook, 'david'))

// console.log(fone.cleanUp(jazbook))
// console.log(fone.remove(jazbook, 'jae'))
// console.log(fone.addNew(jazbook, 'bob', '4444'))
// console.log(fone.lookUp(jazbook, 'jae'))

  const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
