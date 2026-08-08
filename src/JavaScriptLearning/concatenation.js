let x = 100;
let y = 200;

let a = "Selenium";
let b = "Playwright"

console.log(x + y); // 100 + 200 = 300
console.log(a + b); // Selenium + Playwright = SeleniumPlaywright

console.log(x + a); //100Selenium
console.log(b + y); //Playwright200

console.log(x + y + a + b); //300SeleniumPlaywright

console.log(x + y + a + b + x + y); //300SeleniumPlaywright100200
console.log(typeof (x + y + a + b + x + y)); //String

console.log(a + b + x + y); //SeleniumPlaywright100200 

console.log( a + b + (x + y)); //SeleniumPlaywright300
console.log(typeof (a + b + (x + y))); //Srting

console.log(x + y + a + b + (x + y)); //300SeleniumPlaywright300

console.log("The value of x: " + x); //The value of x: 100
console.log(typeof ("The value of x: " + x)); //string

console.log("The sum of x and y is: " + x + y); //The sum of x and y is: 100200

console.log("The sum of x and y is:", x + y); //The sum of x and y is: 300

console.log("The sum of x and y is: "+ (x + y)); //The sum of x and y is: 300

console.log(12.33 + x + y + a + b + 3.55 + 78.90); //312.33SeleniumPlaywright3.5578.9
console.log(typeof (12.33 + x + y + a + b + 3.55 + 78.90)); //String

/*-----------------------------------------------------------------------------------*/

console.log(100n + "Girinath"); //100Girinath -> n will not get printed in console
console.log("Girinath" + 100n); //Girinath100

console.log(1 + '1'); //11 -> 1 will concatinate with 1 and will become 11
console.log(typeof (1 + '1')); //string

console.log(1 + 1); //2
console.log(typeof (1 + 1)); //number

console.log(1 - '1'); //0
console.log('5' - 1); //4

console.log('10' - '4'); //6
console.log('10'  + '4'); //104 -> concatination for 10 and 4 is 104

console.log('hello' - 2); //NaN
console.log(10 - "Girinath"); //NaN

console.log("Girinath" + 100); //Girinath100
console.log("Girinath" - 100); //NaN
console.log("Girinath" * 100); //NaN
console.log("Girinath" / 100); //NaN

console.log(typeof ("Girinath" + 100)); //string
console.log(typeof ("Girinath" / 100)); //number

console.log(10 + '1' -1); //101 - 1 -> 100
console.log('2' - 10); //-8

/*-----------------------------------------------------------------------------------*/

console.log(10 / '2'); //5
console.log("20" / "5"); //4
console.log('20' / "Girinath"); //NaN

console.log(10 * "2"); //20
console.log(10 * "2" * 5); //100
console.log(10 + "2" * 5); // BODMAS concept -> 2 * 5 = 10, then 10 + 10(2*5) = 20
console.log(10 + "5" * 5 / "2"); //10 + 5 * 2.5 -> 10 + 12.5 -> 22.5 (BODMAS)
console.log(10 + "5" * 5 / "2" * (10 + 2)); 
/* 
10 + "5" * 5 / "2" * 12
10 + "5" * 2.5 * 12
10 + 150
160
*/

/* ---------------------------------------------------------- */

// Exponential
console.log(2 ** 3); //8
console.log('2' ** 3); //8
console.log('2' ** '3');//8

console.log("Girinath" ** 2); //NaN

//Unary plus Operator
console.log('53' + 1); // 531
console.log(+'53' + 1); //54 -> unary operator converts string to a number
console.log(-'53' + 1); //-52

let salary = '15000';
console.log(+salary + 1000); //16000
console.log(+ salary + 1000); //16000

console.log(+"Girinath" + 100); //NaN
console.log(+"Girinath" - 100); //NaN
console.log(+"Girinath" * 100); //NaN
console.log(+"Girinath" / 100); //NaN

// Unary Negation Operator
console.log(-'42' + 100); //58

console.log(100 - -'40'); //140

console.log("100n" + 100n); //100n100
console.log("100" + 100n); //100100
console.log(100 + 100n); //Cannot mix BigInt and other types, use explicit conversions

console.log(+"100n"); //NaN
console.log(+"100n" + 100n); // NaN + 100n -> Cannot mix BigInt and other types, use explicit conversions

/* ---------------------------------------------------------- */
