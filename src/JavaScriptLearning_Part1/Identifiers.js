/* 

Var, Let, and Const in JavaScript. They are used to declare variables in JavaScript. 
The main differences between them are their scope, hoisting behavior, 
and whether they can be updated or redeclared.


We can use camelCase or PascalCase or snake_case or SREAMING_SNAKE_CASE for constant variable names.

*/

//1. var

var x = 1;
/* 
var --> Keyword or Identifier
x --> variable name 
= --> Assignment Operator
1 --> Value
*/

console.log('Value of x: ', x); //1
console.log('Data Type of x: ', typeof (x)); //number

var x = 5;
var x = 10; //Redeclaration is allowed
console.log('Value of x: ', x); //10

x = 15; //Updating is allowed
console.log('Value of x: ', x); //15

//2. let
// Variables declared with let are block-scoped.
// They can be updated but not redeclared in the same scope.
let y = 20;
console.log('Value of y: ', y); //20
console.log('Data Type of y: ', typeof (y)); //number

//let y = 25; //Redeclaration is not allowed
y = 30; //Updating is allowed
console.log('Value of y: ', y); //30

//3. const
// Variables declared with const are block-scoped.
// They must be initialized at the time of declaration and cannot be updated or redeclared.

const z = 40;
console.log('Value of z: ', z); //40
console.log('Data Type of z: ', typeof (z)); //number

//const z = 45; //Redeclaration is not allowed
//z = 50; //Updating is not allowed

/* ------------------------------------------ */

const PI = 3.14; //Constant variable
//PI = 3.14159; ---> //Updating is not allowed
console.log('Value of PI: ', PI); //3.14

const my_name = "Girinath"; //Constant variable
console.log('Value of my_name: ', my_name); //Girinath

/* ------------------------------------------ */

//Hoisting behavior of var, let, and const

//1. var -> Hoisting is allowed. The variable is hoisted to the top of its scope and initialized with undefined.
console.log('Value of a: ', a); //undefined
var a = 100;

//2. let -> Hoisting is not allowed. The variable is hoisted to the top of its scope but not initialized.
//console.log('Value of b: ', b); //ReferenceError: Cannot access 'b' before initialization
console.log(b); //Cannot access 'b' before initialization
let b = 200;
console.log('value of b: ', b); //200

//3. const -> Hoisting is not allowed. The variable is hoisted to the top of its scope but not initialized.
//console.log('Value of c: ', c); //ReferenceError: Cannot access 'c' before initialization
console.log(c); //Cannot access 'c' before initialization
const c = 300;
console.log('Value of c: ', c); //300

/* ------------------------------------------ */
/*
let g = 10;
var g = 20; //Error: Redeclaration is allowed for var but not for let
console.log(g); //20
*/
/* ------------------------------------------ */

var h = 10; //SyntaxError: Identifier 'h' has already been declared
let h = 20;
console.log(h);

/* ------------------------------------------ */

i = 10; //ReferenceError: Cannot access 'i' before initialization
let i = 20;
console.log(i);

/* ------------------------------------------ */

j = 10;
var j = 20;
console.log(j); //20