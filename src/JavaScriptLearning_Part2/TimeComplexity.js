

//O(1)
console.log(1);

//O(n) - n(i = 0) + n(i <= 10) + n(i++) + 1( console.log(i)) => 3n+1 => 3n(Removed constant) => n
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//O(n^2)
for (let i = 0; i <= 5; i++) {
    for (let j = 0; j <= 5; j++) {
        // process.stdout.write(i + '' + j + ' ');
        process.stdout.write(`${i}${j} `);
        // console.log(i + '' + j + ' ');
    }
    console.log();
}