

console.log(20);
console.log('Hello World!!');

process.stdout.write(100 + ' ');
process.stdout.write('Hello world!!');

let i = 1;
while (i <= 10) {
    process.stdout.write(i + ' '); // 1 2 3 4 5 6 7 8 9 10 
    i++;
}

/*

00 01 02 03 04 05
10 11 12 13 14 15
.
.
50 51 52 53 54 55

*/

for (let i = 0; i <= 5; i++) {
    for (let j = 0; j <= 5; j++) {
        process.stdout.write(i + '' + j + ' ');
        // console.log(i + '' + j + ' ');
    }
    console.log();
}

/*
000 001 002 003 004 005
010 011 012 013 014 015
020 021 022 023 024 025
.
.
550 551 552 553 554 555
*/

for (let i = 0; i <= 5; i++) {
    for (let j = 0; j <= 5; j++) {
        for (let k = 0; k <= 5; k++) {
            process.stdout.write(i + '' + j + '' + k + " ");
            // break;
        }
        console.log('');
    }
    // console.log('');
}