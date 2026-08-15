//This File is all about the primitive data types in JavaScript. There are 7 primitive data types in JavaScript. They are:

//1. Number

/* Number is a primitive data type in JavaScript that represents numeric values. 
It can be an integer or a floating-point number. JavaScript uses the IEEE 754 standard for representing 
numbers, which means that all numbers are stored as 64-bit floating-point values. */

let x = 10; //Postive Number
console.log('Value of x: ',x); //10
console.log('Data Type of x: ', typeof x); //Number
console.log('Data Type of x: ', typeof (x)); //Number

let y = 12.99; //Decimal Number
console.log('Value of y: ',y); //12.99
console.log('Data Type of y: ', typeof (y)); //Number

let z = -1000; //Negative Number
console.log('Value of z: ',z); //-1000
console.log('Data Type of z: ', typeof (z)); //Number

let xyz = 0xFF; //Hexadecimal
console.log('Value of xyz: ',xyz); //255
console.log('Data Type of xyz: ', typeof (xyz)); //Number

let abc = 0b1010; //Binary
console.log('Value of abc: ',abc); //10
console.log('Data Type of abc: ', typeof (abc)); //Number

//2. String

/*String is a sequence of characters enclosed in single quotes, double quotes, or backticks. 
It can contain letters, numbers, symbols, and spaces. Strings are used to represent text in JavaScript.
Size for each character in a string is 2 bytes and takes extra 2 bytes for the length of the string. 
So, the total size of a string is (2 * number of characters) + 2 bytes.
*/

let str1 = "Hello, World!"; //String with double quotes
console.log('Value of str1: ',str1); //Hello, World!
console.log('Data Type of str1: ', typeof (str1)); //String

let str2 = 'Hello, JavaScript!'; //String with single quotes
console.log('Value of str2: ',str2);  //Hello, JavaScript!
console.log('Data Type of str2: ', typeof (str2)); //String

let str3 = `${str1}`; //String with backticks (Template Literals)
console.log('Value of str3: ',str3);  //Hello, World!
console.log('Data Type of str3: ', typeof (str3)); //String

let str4 = '1000'; //String with numbers
console.log('Value of str4: ',str4);  //1000
console.log('Data Type of str4: ', typeof (str4)); //String

let str5 = 'true'; //String with boolean value
console.log('Value of str5: ',str5);  //true
console.log('Data Type of str5: ', typeof (str5)); //String

let str6 = '$'; //String with special character
console.log('Value of str6: ',str6);  //$
console.log('Data Type of str6: ', typeof (str6)); //String

//3. Boolean

/* 
Boolean is a primitive data type in JavaScript that represents one of two values: true or false.
Each boolean value is stored in 4 bytes of memory.

*/

let bool1 = true; //Boolean value true
console.log('Value of bool1: ',bool1); //true
console.log('Data Type of bool1: ', typeof (bool1)); //Boolean

let bool2 = false; //Boolean value false
console.log('Value of bool2: ',bool2); //false
console.log('Data Type of bool2: ', typeof (bool2)); //Boolean

//4. Undefined

/*
Undefined is a primitive data type in JavaScript that represents the absence of a value or an uninitialized variable.
When a variable is declared but not assigned a value, it is automatically assigned the value undefined.
Each undefined value is stored in 4 bytes of memory.
*/

let undef; //Variable declared but not assigned a value
console.log('Value of undef: ',undef); //undefined
console.log('Data Type of undef: ', typeof (undef)); //Undefined

undef = 10; //Modified the value of undef to 10
console.log('Value of undef: ',undef); //10
console.log('Data Type of undef: ', typeof (undef)); //Number

let undef2 = undefined; //Variable declared and assigned a value of undefined
console.log('Value of undef2: ',undef2); //undefined
console.log('Data Type of undef2: ', typeof (undef2)); //Undefined

undef2 = "Hello"; //Modified the value of undef2 to "Hello"
console.log('Value of undef2: ',undef2); //Hello
console.log('Data Type of undef2: ', typeof (undef2)); //String

//5. Null

/*
Null is a primitive data type in JavaScript that represents the intentional absence of any object value.
It is often used to indicate that a variable should have no value or that an object reference is empty.
Each null value is stored in 4 bytes of memory.
*/

let nullVar = null; //Variable declared and assigned a value of null
console.log('Value of nullVar: ',nullVar); //null
console.log('Data Type of nullVar: ', typeof (nullVar)); //Object

nullVar = 20; //Modified the value of nullVar to 20
console.log('Value of nullVar: ',nullVar); //20
console.log('Data Type of nullVar: ', typeof (nullVar)); //Number

//6. BigInt

console.log(Number.MAX_SAFE_INTEGER);

//let myNum = 9007199254740991n + 10; 
//console.log( myNum); //Cannot mix BigInt and other types, use explicit conversions

let myBigInt = 9007199254740991n + 100n;
console.log(myBigInt); //9007199254741091n

let myBigInt2 = 9007199254740991n + "10n"
console.log(myBigInt2); //900719925474099110n



//7. Symbol

console.log(Symbol("id")); 
console.log(typeof id);

