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