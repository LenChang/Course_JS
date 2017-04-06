// Lecture: variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(26);

var fullAge = true;
console.log(fullAge);
*/

// Lecture: variables 2
/*
var name = 'John';
var age = 26;
// type Coercion 
console.log(name + age);
console.log(age + age)

var job, isMarried;

console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + 'is a' + age + 'years old' + job + '. is he married?' 
+ isMarried);

age = 'thirty six';
job = 'driver';

console.log(age + job);

var lastName = prompt('What is the last name?');
console.log(lastName);

alert('The lastName is ' + lastName);
*/

// Lecture: operators
var now = 2016;
var birthYear = now - 26;
console.log(birthYear);

birthYear = now - 26 * 2;
//2016 - 52
//1964
console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageMark = ageJohn = (3 + 5) * 4 - 6;
console.log(ageJohn);

ageJohn++;
console.log(ageJohn);
ageMark *= 2;
// ageMark = ageMark * 2;
console.log('ageMark*=2 is ' + ageMark);