/*
Objects are non primitive data types, stored in JavaScript's heap memory
Reference variable of the object, for eg 'user' will be stored in stack memory
and the reference variable will just point out the object in heap

If the object points to undefined or null or no-reference
then the garbage collector will empty those objects in heap memory whenever required
*/

let user = {
    name: 'Girinath',
    age: 23,
    gender: 'M',
    city: 'Coimbatore',
    isActive: true,
    name: 'Rohith'
}

console.log(user.name); //Rohith

user.name = 'Santha'

console.log(user.name); // santha
console.log(user.age); // 23
console.log(user.isActive); // true

console.log(user.country); // undefined
console.log(typeof user); // object
console.log(typeof user.name); //string
console.log(user['age']);//23

console.log('---------------');
/* Iterate object using for.. in loop only, for..of loop give TypeError*/

for (let e in user) {
    console.log(user[e]);
}

console.log('---------------');

for (let e in user) {
    if (e === 'gender') {
        console.log(e, '=', user[e]);
    }
}
/*
console.log('--------------');
for (let e of user) {
    console.log(user[e]); // TypeError: user is not iterable
}
*/

let name1 = {
    name: 'Girinath',
    age: 23,
    gender: 'M',
}
let name2 = {
    name: 'Girinath',
    age: 23,
    gender: 'M',
}
console.log(name1 === name2); //false -> Javascript will create memory allocation for both object differently
console.log(name1 == name2); //false

/* 
Creating an no-reference object, then garbage collector will clear this object in memory 
{
    name:'Apple'
}
*/

