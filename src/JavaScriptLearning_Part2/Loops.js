//while loop

let i = 1;
while (i <= 200) {
    console.log(i);
    i++;
    // i = i + 1;
    // ++i;
}

/* --------------------------------------- */

while (true) {
    // process.stdout.write("Good Morning!!")
    console.log("Good Morning!!!");
    break;
}

/* --------------------------------------- */

let l = 1;
while (l <= 10) {

    console.log(l);
    if (l === 5) {
        console.log("bye!!");
        break;
    }
    l++;
}

/* -------------------------------------- */

let k = 10;
while (k >= 0) {
    console.log(k);
    k--;
}

/* -------------------------------------- */


// for(initilization; condition; increment){}

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

/* -------------------------------------- */
let n = 0;
for (; n <= 10; n++) {
    console.log("Hello world!!");
}

/* -------------------------------------- */
for (let m = 1; m <= 100; m++) {
    if (m % 2 == 0) {
        console.log(m + " is divisible by 4");
        break;
        // continue;
    }
}

/* -------------------------------------- */

let p = 1;
do {
    p++;
    console.log(p);
} while (p <= 10);

/* -------------------------------------- */

// While loop

let q = 0;
while (q > 10) {
    console.log(p);
    p++;
}

// for loop

// let k = 1;
for (let k = 1; k >= 10; k++) {
    k++;
    console.log(k);
}


// Do-while loop

