// Template Literals - Backticks

// Using single or double quote
let message1 = 'I love programming';
console.log(message1);

console.log("-------------------------");

// Using backticks we can access multiple lines 
let message2 = `I
Love
Programming`;
console.log(message2);

console.log("-------------------------");

let a = 10;
let b = 20;
console.log("The value of a is: "+ a);
console.log("The value of b is: "+ b);
console.log("The value of a + b is: "+ (a+b));

console.log("--------------------------");
let x = 10;
let y = 20;
console.log(`The value of x is: ${x}`);//10
console.log(`The value of y is: ${y}`);// 20
console.log(`The value of x + y is: ${x+y}`);// 30

console.log(`The value of x and y is: ${x} + ${y}`);// 10 + 20

console.log("------------------------------");
//I love 'JavaScript' coding
let msg = "I love 'JavaScript' coding";
let msg1 = 'I love ' + "'JavaScript' " + 'coding';

// \ -> Escape character (which escapes character next to \)
let msg2 = 'I love \'javascript\' coding';
let msg3 = 'I love \\\\\\javascript\\\\\\ coding';

let msg4 = `I love 'javascript' coding`

console.log(msg4);

//span[text()='Virat kohli']
console.log('//span[text()=\'Virat kohli\']'); // output: //span[text()='Virat kohli']

let player_name = 'Dhoni';
console.log(`//span[text()='${player_name}']`);

let employee_id = 123456;
let employee_name = "Girinath";
let employee_gender = 'M';
let employee_city = "Chennai";

console.log(`Employee data is: ${employee_id} | ${employee_name} | ${employee_gender} | ${employee_city}`);
// Employee data is: 123456 | Girinath | M | Chennai
