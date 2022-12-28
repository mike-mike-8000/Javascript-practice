// This is a part of a tutorial becuase exams are near and I'm not ready
console.log('Hello User.');

//Here we will create a class/object

alert('actual uses of javascript, click ok to continue');

let human = {
    name: 'Michaels',
    age: 18
};

//change properties by dot notation
human.name = 'Mike'
//Change by bracket notation
human['name'] = 'Michael'

let colorz = ['red','blue','3'];
colorz[3]= 'true';

console.log(typeof colorz);
console.log(human);
console.log(typeof human.name);

//A simple javascript function displaying age

function greet(age) {
    console.log('HELLO, my age is ' + age);
}

greet('54');

console.log('A simple JS function adding numbers');

function sum(number) {
    return number + 3;
}

console.log(sum(5));
