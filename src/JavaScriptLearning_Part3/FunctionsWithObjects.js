/**
 * This fuction will create an object using username argument and return it back
 * @param {string} username 
 */
function getCustomerInfo(username) {
    let userObject = null;
    let userName = username.toLowerCase().trim();

    if (userName === 'girinath') {
        userObject = {
            name: 'Girinath',
            gender: 'M',
            age: 23
        }
    } else if (userName === 'rohith') {
        userObject = {
            name: 'Rohith',
            gender: 'M',
            age: 19
        }
    } else if (userName === 'santha') {
        userObject = {
            name: 'Santha',
            gender: 'F',
            age: 49
        }
    } else {
        console.log(userName, 'is not found, please provide a valid username');
    }
    return userObject;
}

let customerObject = getCustomerInfo('er');
console.log(customerObject);

for (let e in customerObject) {
    console.log(customerObject[e]);
}