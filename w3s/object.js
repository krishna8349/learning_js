// Created empty object/dictionary
var person = {}

// Adding keys to person dict/object
person.name= "krishna";
person.class=12;
person.subject= "PCM";
person.roll_no=4;
person.medium="English";
person.phone_no = 851698976876

// Remove a key from a dict/object
delete person.class;

// list of keys
console.log(Object.keys(person));

// list of entries
console.log(Object.entries(person));

// list of items
console.log(Object.values(person));

// Printing object/dict
console.log(person)
