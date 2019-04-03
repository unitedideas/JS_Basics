let name = ' Shane '

// length property
console.log(name.length)

// convert to upper case
console.log(name.toUpperCase())

// convert to lower case
console.log(name.toLowerCase())

// includes method
console.log(name.includes('ha', [1]))
console.log(name[2])

// trim
console.log(name.trim())

// challenge
let isValidPassword= function(password){
 return password.length > 8 && !password.toLowerCase().includes('password')
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@#$%#'))
console.log(isValidPassword('asasfpassword;lakjf'))