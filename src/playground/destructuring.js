// OBject Destructuring

// const person = {
//     name: 'Java',
//     age: 20,
//     location: {
//         city: 'Hava',
//         temp: 92
//     }
// }

// // renaming and default value
// const { name: firstName = 'Anonymous', age } = person

// console.log(`${firstName} is ${age}`)

// // renaming
// const { city, temp: temperature } = person.location
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }


// Array Destructuring

const address = ['1279 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19417']

const [street, city, state = "New York", zip] = address

console.log(`You are in ${city} ${state}`)