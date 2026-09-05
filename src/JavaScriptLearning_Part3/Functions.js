
/*
Function: Generic piece of code which process some data/calculations
and returns something, stored in heap memory

Eg: Factory - we send raw materials and guidance, then
the factory returns the product which can use for some other purpose
*/

// 1. Simple function -> No input, No return 
function test() {
    console.log('simple test function');
}

// To call the function
test();
console.log(typeof test); //function

/*---------------------------------------------------- */

// 2. no return, some input

/**
 * This search function is used to search a key
 * @param {string} productName 
 */
function search(productName) {
    console.log('searching...');
    console.log(productName, 'is founded');
}

search('Girinath');
search(100);

/*---------------------------------------------------- */

// 3. giving input, getting return

/**
 * This function is to add two numbers and return the value back
 * @param {number} a 
 * @param {number} b 
 */
function add(a, b) {
    return a + b;
}

// console.log(add(100, 200)); // we can print like this also, but

// Storing in a variable and proceed further is the best approach always and always

let sum = add(10, 20);
console.log(sum);


/*---------------------------------------------------- */

// 4. No input, getting return

function getName() {
    return 'Girinath';
}

let myName = getName();
if (myName === 'Girinath') {
    console.log('You are allowed inside');
} else {
    console.log('You are not allowed inside');
}


/*---------------------------------------------------- */

/**
 * This function is to launch web browser
 * @param {string} browserName 
 */
function launchBrowser(browserName) {

    switch (browserName.toLowerCase().trim()) {
        case 'chrome':
            console.log('Launching chrome browser...');
            return true;

        case 'edge':
            console.log('Launching edge browser...');
            return true;

        case 'firefox':
            console.log('Launching firefox browser...');
            return true;

        case 'safari':
            console.log('Launching safari browser...');
            return true;

        default:
            console.log('Invalid browser name, please enter a valid browser name');
            return false;
    }
}

let isLaunched = launchBrowser('ie');
if (isLaunched) {
    console.log('enter the url...');
} else {
    console.log('entering the url is not possible..');
}

/*---------------------------------------------------- */

function getUserInfo() {
    let userInfo = ['vijay', 27, true, 12.5, 'chennai'];
    return userInfo;
}

let vijayInfo = getUserInfo();
console.log(vijayInfo);
console.log(vijayInfo.length);
for (let e in vijayInfo) {
    console.log(vijayInfo[e]);
}

/*---------------------------------------------------- */

// Function overloading is not possible

function add(a, b, c) {
    return a + b + c;
}

function add(a, b) {
    return a + b;
}

let sum1 = add(10, 20, 30);
console.log(sum1); // 30