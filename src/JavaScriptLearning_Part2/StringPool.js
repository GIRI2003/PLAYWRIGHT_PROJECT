
let str1 = 'Girinath'
console.log(typeof str1);//string
let str2 = 'Girinath'

/*
SCP-> String Constant Pool
Girinath -> Stored in SCP heap memory, and refered by str1 and str2 in stack memory

Girinath will be created only once in the SCP memory, whereas
str1, str2,.. will created in stack memory and points out to Girinath value in heap memory
*/

console.log(str1 == str2);//true
console.log(str1 === str2);//true

let username = 'Girinath'
username + 'Automation'
console.log(username);//Girinath

let uName = "Girinath"
uName = uName + " Automation"
console.log(uName);

let password = 'selenium123'
password = 'pw123'

