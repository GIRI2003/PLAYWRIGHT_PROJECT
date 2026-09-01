//------------------- Assignment using 4 objects -------------------------------

let a = {
    name: "Apple",
    quanity: 2,
    color: "Red"
};

let b = {
    name: "Banana",
    quanity: 10,
    color: "Yellow"
};

let c = {
    name: "Guava",
    quanity: 5,
    color: "Green"
};

let d = {
    name: "Orange",
    quanity: 4,
    color: "Orange"
};

console.log(a.name, a.quanity, a.color); // Apple
console.log(b.name, b.quanity, b.color); // Banana
console.log(c.name, c.quanity, c.color); // Guava
console.log(d.name, d.quanity, d.color); // Orange

console.log("-------------------------");

a = b; // a will break connection with current object

console.log(a.name, a.quanity, a.color); // Banana
console.log(b.name, b.quanity, b.color); // Banana
console.log(c.name, c.quanity, c.color); // Guava
console.log(d.name, d.quanity, d.color); // Orange
console.log("-------------------------");

b = c; // b will break connection with current object

console.log(a.name, a.quanity, a.color); // Banana
console.log(b.name, b.quanity, b.color); // Guava
console.log(c.name, c.quanity, c.color); // Guava
console.log(d.name, d.quanity, d.color); // Orange
console.log("-------------------------");

c = a = b; // c, a will break connection with current object

console.log(a.name, a.quanity, a.color); // Guava
console.log(b.name, b.quanity, b.color); // Guava
console.log(c.name, c.quanity, c.color); // Guava
console.log(d.name, d.quanity, d.color); // Orange
console.log("-------------------------");

a = b = c = d; // a,b,c will break connection with current object

console.log(a.name, a.quanity, a.color); // Orange
console.log(b.name, b.quanity, b.color); // Orange
console.log(c.name, c.quanity, c.color); // Orange
console.log(d.name, d.quanity, d.color); // Orange
console.log("-------------------------");