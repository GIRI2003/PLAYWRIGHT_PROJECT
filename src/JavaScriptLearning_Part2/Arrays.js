/*
Arrays: Collection of datas, either simalr type of data or different type of data [10,20,30,40] or ["Ajay",25000,'M',true]
Homogeneous -> Collection of similar type of datas -> [10,20,30,40]
Heterogeneous -> Collection of different types of datas -> ["Ajay",25000,'M',true]

Arrays are dynamic in nature, which means the size of arrays are not fixed
typeOf Arrays is 'object'

let i = 10 -> stores completely inside the stack memory

let i = [10,20,30,40], in this i variable will be stored inside stack memory, values will be stored inside heap memory
So, variable i which is inside stack memory will be pointing to the values inside heap memory 

Lowest index = 0
Highest index = 3
length = HighestIndex + 1

*/


let i = [10, 20, 30, 40]; // i -> reference variable(stack memory) pointing to the values(heap memory)
console.log('Lenght of Array is: ', i.length); // Lenght of Array is: 4
console.log('Lowest Index is:', 0); // Lowest Index is: 0
console.log('Highest Index is:', i.length - 1); // Highest Index is: 3

console.log(typeof i); // object

console.log(i[0]); // 10
console.log(i[1]); // 20
console.log(i[2]); // 30
console.log(i[3]); // 40

console.log(i[4]); // undefined
console.log(i[-1]); // undefined -> there is no negative index concept in JavaScript


console.log(i); // [ 10, 20, 30, 40 ]
i[0] = 100; // Reassigning i[0] value from  10 to 100
console.log(i); // [ 100, 20, 30, 40 ]
i[4] = 400; // JS automatically increases the size of array and assign i[4] to 400
console.log(i); // [ 100, 20, 30, 40, 400 ]
i[10] = 1000;
console.log(i); // [ 100, 20, 30, 40, 400, <5 empty items>, 1000 ]
i[7] = 700;
console.log(i); // [ 100, 20, 30, 40, 400, <2 empty items>, 700, <2 empty items>, 1000 ]
console.log(i[6]); // undefined

console.log(i.length); // 11

let city = ['Coimbatore', 'Chennai', 'Kochi', 'Mumbai', 'Pune']//0-4, l=5
console.log(city); // [ 'Coimbatore', 'Chennai', 'Kochi', 'Mumbai', 'Pune' ]
console.log(city.length); //5
city[1] = 'Bengaluru';
console.log(city); // [ 'Coimbatore', 'Bengaluru', 'Kochi', 'Mumbai', 'Pune' ]


let employeeData = [1001, 'Ajay', true, 'M', '1234 567 890'] //0-4 l=5
console.log(employeeData); // [ 1001, 'Ajay', true, 'M', '1234 567 890' ]
console.log(employeeData.length); // 5

// To make the loop dynamic, instead of i<=4, write i<=employeeData.length-1
for (let i = 0; i <= employeeData.length - 1; i++) {
    console.log(employeeData[i]);
}

// Reverse order
let empData1 = [1001, 'Ajay', true, 'M', '1234 567 890'] //0-4 l=5
for (let i = empData1.length - 1; i >= 0; i--) {
    console.log(empData1[i]);
}

// forof -> Better or Mordern way to write for loop
let empData2 = [1001, 'Ajay', true, 'M', '1234 567 890'] //0-4 l=5
for (let e of empData2) {
    console.log(e);
}

// Reverse order
let city1 = ['Kochi', 'Chennai', 'Coimbatore', 'Mumbai', 'Pune']//0-4, l=5
for (let e of city1) {
    console.log(e);
    if (e === 'Coimbatore') {
        console.log('Click on the city');
        break;
    }
}

let empData = [1001, 'Ajay', true, 'M', '1234 567 890']
for (let e of empData) {
    console.log(e);
}

// for ...in loop -> represents the index of the element
let empId = [1001, 1002, 1003, 1004];
for (let e in empId) {
    console.log(e, '->', empId[e]);// 0 -> 1001, 1 -> 1002, 2 -> 1003, 3 -> 1004
}

// reverse array using for..of loop
let empData3 = [1001, 'Ajay', true, 'M', '1234 567 890']//0-4, l=5
let count = empData3.length - 1;
for (let e of empData3) {
    e = count;
    console.log(empData3[e]);
    count--;
}

// Assignment - Reverse the array using for..in loop

let studentData = [1001, 'Krish', 'M', false, '9876543210']
let count1 = studentData.length - 1;
for (let e in studentData) {
    e = count1;
    console.log(studentData[e]);
    count1--;
}

let studentData1 = [1001, 'Krish', 'M', false, '9876543210']

let rev = studentData1.length - 1; //l=4
for (let s of studentData1) {
    s = rev;
    console.log(studentData1[s]);
    rev--;
}