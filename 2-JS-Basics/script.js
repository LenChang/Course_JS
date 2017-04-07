//////////////////////////////////////////
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

/////////////////////////////////////////////////////////////////
// Lecture: operators
/*
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
*/

///////////////////////////////////////////////////////////////////
// Lecture: if/else statements
/*
var name = 'Len Chang';
var age = 26;
var isMarried = 'no';

if(isMarried === 'yes') {
    console.log(name + ' is married');
} else {
    console.log(name + 'will hopefully marry soon :)');
}

isMarried = true;

if(isMarried){
    console.log('YES!');
}else{
    console.log('NO!');
}

if(isMarried){
    console.log('YES!');
}

// type Coercion 
if (23 == '23'){
    console.log('Something to print...')
}

if (23 === '23'){
    console.log('Something to print...')
}
*/

////////////////////////////////////////////////////////////
// lecture: boolean logic and switch
/*
var age = 16;

if(age <= 20){
    console.log('John is a tennager');
} else if(age > 20 && age < 30){
    console.log('John is a young man');
}else{
    console.log('John is a man');
}

console.log(age >= 20);      // => false
console.log(age < 30);       // => true
console.log(!(age < 30));    // => false

console.log(age >= 20 && age < 30); // => false
console.log(age >= 20 || age < 30); // => true

var job = 'teacher';
job = prompt('What does John do?');
switch (job){
    case 'teacher':
        console.log('John teaches kids');
        break;
    case 'driver':
        console.log('John drives a cab in Lisbon.');
        break;
    default:
        console.log('John does something else');
}
*/

//////////////////////////////////////////////
// CODING CHALLENGE 1
/*
var age_John = age_JohnFriend = 26;
var height_John = height_JohnFriend = 178;

var score_John = age_John + height_John * 5;
var score_JohnFriend = age_JohnFriend + height_John * 5;

if (score_John > score_JohnFriend){
    console.log('John win!!');
}else if(score_John < score_JohnFriend){
    console.log("John's friend win!!")
}else{
    console.log('DRAW!')
}
*/

///////////////////////////////////////////////
// Lecture: Functions
/*
function calculateAge(yearOfBirth){
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageLen = calculateAge(1986);
var ageMary = calculateAge(1948);
console.log(ageJohn);

function yearsUntilRetirement(name, yearOfBirth){
    var age = calculateAge(yearOfBirth)
    var retirement = 65 - age;

    if(retirement >= 0){
        console.log(name + 'retires in ' + retirement + ' years.');
    }else{
        console.log(name + ' is already retired.')
    }    
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Len', 1986);
yearsUntilRetirement('Mary', 1948);
*/

/////////////////////////////////////////////////////
// Lecture: Statements and expressions
/*
function someFun(par){
    //code
}

var someFun = function(par){
    //code
}

//Expressions
3 + 4;
var x = 3;

//statements
if (x===5){
    //do something
}
*/

//////////////////////////////////////////////////////
// Lecture: Arrays

var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names[0]);
names[1] = 'Ben';
console.log(names);

var john = ['John','Smith',1990,'designer',false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();
console.log(john);

//alert(john.lastIndexOf('Smith'));

if(john.indexOf('teacher') === -1){
    console.log('John is NOT a teacher.');
}

