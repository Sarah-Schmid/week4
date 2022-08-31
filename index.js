let myString = `hello
world,
my name
is Sarah`;


console.log(myString);

let anotherString = 'Hello\nworld\nmy name\nis Sarah'
console.log(anotherString);


console.log(`Six times five = ${5 * 6}`)

// Arrow Functions using a Template Literal instead of traditional string
let createFullName = (firstName, lastName) => `${firstName} ${lastName}`

let someFunction = (a, b)=>{
    let result = '';
    for let i = 0; i <a.length; i++) {
        result += a;
    }
    return result;
}

console.log(createFullName('Tom', 'Sawyer'));
