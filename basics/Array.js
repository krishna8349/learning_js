// creating an Array
var Student=["Amna","Abhay","Krishna","Digpal"]
var Subject=["PCM","BIO"]
console.log(Student);

// for join() the Array
console.log(Student.join("-"));

// for removing last element use pop()
console.log(Student.pop());
console.log(Student);

// for adding the element use puch()
console.log(Student.push("Digpal"));
console.log(Student);

// for removing first element use shift()
console.log(Student.shift());
console.log(Student);

// for adding first element use unshift()
console.log(Student.unshift("Aman"));
console.log(Student);

// for changing element
Student[1]="Suraj";
console.log(Student);

// for adding the element in last use .length[]
Student[Student.length]="Abhay";
console.log(Student);

// for deleting the element delet()
delete Student[1];
console.log(Student);

// for adding again the deleted element
Student[1]="Ram";
console.log(Student)

// for adding the element in Array use splice()
Student.splice(1,0,"Suraj");
console.log(Student);

// for combine two Arrays use concat()
var children= Student.concat(Subject);
console.log(children);

// for deleting any element use slice()
console.log(children.slice(1));

// convert all element in one string to use .tostring()
children.toString();

// for arrange in assending order use .sort()
var Number=[1,2,32,56,67,89];
Number.sort();
console.log(Number);
Number.reverse();
console.log(Number);

var i;
for(i=0;i<Number.length;i++){
    console.log(Number[i]);
}