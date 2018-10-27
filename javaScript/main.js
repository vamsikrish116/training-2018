/*
//String
var name = 'Gopi babu';
console.log(typeof (name));

//number
var num = 123;
console.log(typeof (num));

//float // double
var currency = 70.18;
console.log(typeof (currency));

//boolean
var completed = true;
console.log(typeof (completed));

//null
var voids = null;
console.log(voids);

//array
var details = [];
console.log(typeof (details));
details.push('DSU');
details['name'] = 'vamsi';
details[2] = 'SFS';
details.push('DSU');
console.log(details[0]);

//Objects
var personalDetails = {
    name: 'gopibabu',
    age: 26,
    qualification: 'MS',
    passed: true,
    percentage: 70.15
};
console.log(typeof (personalDetails));
console.log(personalDetails.passed);

var numbers = [123, 456, 789, 741, 852, 963];
console.log(numbers.reverse());
console.log(numbers.sort());

//Arithmetic Operators and functions
function addition(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    var result = a/b;
    return result;
}

function Mod(a, b) {
    return a % b;
}

var result1 = addition(10, 20);
var result2 = multiply(10, 20);
var result3 = divide(100, 20);
var result4 = Mod(90, 20);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

//Logical Operators & conditionals
let score = 36;
if (score == '36') {
    console.log('value is equal');
}

if (score === '36') {
    console.log('value is identical');
} else {
    console.log('value is not identical');
}

var total = 75;

if (total > 90) {
    console.log('A grade');
} else if (total > 80 && total < 90) {
    console.log('B grade');
} else if (total > 70 && total < 80) {
    console.log('C grade');
} else if (total > 60 && total < 70) {
    console.log('D grade');
} else{
    console.log('failed');
}

var win = 30;

if( win == 40 || win == 30){
    console.log('nominated');
}

if( win == 40 ^ win == 30){
    console.log('nominated xor');
}

//Switch
var fruit = 'lemons';
switch (fruit) {
    case 'grapes' : 
        console.log('I got grapes');
        break;
    case 'bananas' : 
        console.log('I got bananas');
        break;
    case 'apples' : 
        console.log('I got apples');
        break;
    default:
        console.log('I don\'t want Them'); 
}

console.log('ended switch');
*/
/**Difference betweeen let and var */
/** 
var score = 50;

function getScore() {
    var score = 100;
    console.log(score);
}

getScore();
console.log(score);
*/

/**Objects */
/*
var person = {
    firstName: 'gopibabu',
    lastName: 'Srungavarapu',
    age: 26,
    children: ['viswas', 'vivek'],
    address: {
        street: 'Main Road',
        city: 'Prakasam',
        country: 'India',
        pin: 523169
    },
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    },
    fullName2: () => {
        let first =  person.firstName + 'sam';
        return first + ' ' + person.lastName;
    },
    fullName3: () => person.firstName + ' ' + person.lastName
}

console.log(person);
console.log(person.fullName());
console.log(person.address.country);
console.log(person.children[0]);
console.log(person.age);
console.log(person.fullName());
console.log(person.fullName2());
console.log(person.fullName3());
*/

/**Object Literal */
/** 
var apple = new Object();
apple.color = 'red';
apple.cost = 5;
apple.types = ['shimla', 'kashmir'];
apple.info = {
    size: 'small',
    age: 10,
    state: 'california'
}
apple.getInfo = function(){
    return 'Apple color is '+ apple.color + 'and its cost is ' + apple.cost;
}

console.log(apple.getInfo());
*/
/** Constructor Pattern */
/** 
function fruit(name, color, shape) {
    this.color = color;
    this.name = name;
    this.shape = shape;
    this.describe = function(){
        return this.name + ' ' + this.shape;
    }
}
var appleInfo = new fruit('apple', 'red', 'round');
console.log(appleInfo);
console.log(appleInfo.describe());
*/

/**Loops */
/** 
for (var i = 0; i < 10; i++) {
    //console.log(i);
}

var numbers = [1, 2, 3, 4, 5, 6];
for (var i = 0; i <= 5; i++) {
    //console.log(i);
}

var i = 0;
while (i < numbers.length) {
    //console.log(i);
    i++;
}

numbers.forEach(function (num) {
    //console.log(num);
});

var users = [
    {
        name: 'gopi',
        age:  26
    },
    {
        name: 'vamsi',
        age: 24
    },
    {
        name: 'dattu',
        age: 23
    },
];

users.forEach((user) => {
    console.log(user.name);
    console.log(user.age);
});
*/
/**Events */
/** 
function clickMe() {
    alert('changed');
}

function changeText(button) {
    button.innerHTML = 'text Changed';
}

function showDate(button) {
    var head1 = document.getElementById('mainHead');
    console.log(head1);
}

function changeHead(button) {
    var head1 = document.getElementById('mainHead');
    head1.innerHTML = Date();
}

function changeHead2(button) {
    var head1 = document.getElementById('mainHead');
    head1.innerHTML = 'JavaScript Essentials';
}

function changeBack(x) {
    var body = document.getElementById('body');
    body.style.background = x.value;
}

function validateForm() {
    var name = document.forms['myForm']['name'].value;
    var email = document.forms['myForm']['email'].value;
    if (name.length < 3) {
        alert('please enter proper name');
        return false;
    }
    if (email.length > 10) {
        alert('please enter normal email');
        return false;
    }
}
*/
const name = 'gopibabu';

console.log(name);

const name2 = new String('vamsi');
console.log(typeof(name2));
console.log(name2.length);