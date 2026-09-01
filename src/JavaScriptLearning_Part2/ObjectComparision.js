

let user1 = {
    name: 'Giri',
    age: 23,
    salary: 8.5,
    isActive: true,
    city: 'Chennai'
}

let user2 = {
    name: 'Giri',
    age: 23,
    salary: 8.5,
    isActive: true,
    city: 'Chennai',
}

/* == or === will compare always adress, not actual value  */
console.log(user1 == user2);//false
console.log(user1 === user2);//false


console.log(JSON.stringify(user1) == JSON.stringify(user2));//true
console.log(JSON.stringify(user1) === JSON.stringify(user2));//true
