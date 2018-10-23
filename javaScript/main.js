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
    return a / b;
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