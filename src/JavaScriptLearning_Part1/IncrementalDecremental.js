
// Post Increement a++
let a = 1;
let b = a++;
console.log(a);//2
console.log(b);//1

let m = -99;
let n = m++;
console.log(m);//-98
console.log(n);//-99

let total = 100;
console.log(total++);//100
console.log(total--);//101
console.log(total);//100


// Pre Increement ++a
let x = 1;
let y = ++x;
console.log(x);//2
console.log(y);//2

let s = -999;
let r = ++s;
console.log(s);//-998
console.log(r);//-998

let pop = 10;
console.log(++pop);//11
console.log(pop);//11


//pre decrement --x
let k = 2;
let g = --k;
console.log(k);//1
console.log(g);//1

//---------------------
let i = 11;
let j = i++ + ++i;
console.log(i);//13
console.log(j);//24

let a = 11;
let b = 22;
let c = a + b + a++ + b++ + ++a + ++b;// 11 + 22 + 11(memory=12) + 22 +(memory=23) + 13 + 24 =>

console.log(a);//13
console.log(b);//24
console.log(c);//103


let i = 0;
let j = i++ - --i + ++i - i--;// 0(memory=1) - 0 + 1 - 1(memory=0)

console.log(i);//0
console.log(j);//0

let i = 1, j = 2, k = 3
let m = i-- - j-- - k--; // 1(memory=0) - 2(memory=1) - 3(memory=2) => -4

console.log(i);//0
console.log(j);//1
console.log(k);//2
console.log(m);//-4


let m = 0, n = 0;
let p = --m * --n * n-- * m--; // -1 * -1 * -1(memory(n)=-2) * -1(memory(m)=-2) => 1
console.log(m); // -2
console.log(n); // -2
console.log(p); // 1


let d = 1.5, D = 2.5;
console.log(d++ + ++D);// 1.5(memory(d) = 2.5) + 3.5 => 5
console.log(d); // 2.5
console.log(D); // 3.5


let a = 11++;
console.log(a); // SyntaxError : Invalid left-hand side expression in postfix operation

let b = 11 + 1;
console.log(b); // 12


let i = 11;
let j = --(i++); // SyntaxError: Invalid left-hand side expression in prefix operation


let a = true; // true -> 1
let b = false; // false -> 0
console.log(a++); // 1(memory(a) = 2)
console.log(b++); // 0(memory(b) = 1)
a++; // (memory(a) = 3)
b++; // (memory(b) = 2)
console.log(a); // 3
console.log(b); // 2