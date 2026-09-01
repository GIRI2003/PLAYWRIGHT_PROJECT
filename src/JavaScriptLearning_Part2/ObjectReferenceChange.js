
let obj1 = {
    name: "Akash",
    age: 23,
    city: "Bangalore"
};

let obj2 = {
    name: "Balu",
    age: 25,
    city: "Mumbai"
};

let obj3 = {
    name: "Chandru",
    age: 24,
    city: "Kochi"
};

console.log(obj1.name, obj1.age, obj1.city);
console.log(obj2.name, obj2.age, obj2.city);
console.log(obj3.name, obj3.age, obj3.city);

console.log("-----------------------");

obj1 = obj2 //Obj1 -> will break connection from current object,

console.log(obj1.name, obj1.age, obj1.city);//Balu
console.log(obj2.name, obj2.age, obj2.city);//Balu
console.log(obj3.name, obj3.age, obj3.city);//Chandru

console.log("-----------------------");

obj2 = obj3; // obj2 will break connection from current object

console.log(obj1.name, obj1.age, obj1.city);//Balu
console.log(obj2.name, obj2.age, obj2.city);//Chandru
console.log(obj3.name, obj3.age, obj3.city);//Chandru

console.log("-----------------------");

obj3 = obj1; // obj3 will break connect from current object

console.log(obj1.name, obj1.age, obj1.city);//Balu
console.log(obj2.name, obj2.age, obj2.city);//Chandru
console.log(obj3.name, obj3.age, obj3.city);//Balu

console.log("-------------------------");
/* 
An object can have multiple reference too.., single reference too.., no reference too..
and garbage collector will collect all the no referenced object in heap memory
*/

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

