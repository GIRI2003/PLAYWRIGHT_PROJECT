// Nested Object -> Object inside an object

let customer = {
    name: 'Girinath',
    age: 23,
    phone: '9876543210',
    salary: 8.5,

    address: {
        roomNum: 101,
        flatName: 'Prestige Apparments',
        city: 'Chennai',
        pincode: 5000021

    },
    identification: {
        gender: 'M',
        height: '5.10',
        color: 'white',
        weight: '60 KG'
    }
}

console.log(customer);
console.log(customer.name, customer.age);
console.log(customer.address.city);
console.log(customer['address']['roomNum']);
console.log(customer['address'].city);
console.log('---------------------------');


for (let ele in customer) {
    if (ele === 'address') {
        let address = customer[ele]
        for (let add in address) {
            console.log(address[add]);
        }
    }
    else if (ele === 'identification') {
        let idenity = customer[ele];
        for (let ide in idenity) {
            console.log(idenity[ide]);
        }
    }
    else {
        console.log(customer[ele]);
    }
}