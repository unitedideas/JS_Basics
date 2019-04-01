// functions: input(argument), code, output(return value)

let greetUser = function () {
    console.log('welcome User')
}

let arrowNotaton = () => {
    value = 'arrow notation'
    return value
}

let square = function (num) {
    console.log(num * num)
}

let arrowSquare = (num) => {
    console.log(num * num)
}

let ageCheck = (age) => {
    let returnValue = age >=21
    return returnValue
}


console.log(arrowNotaton())
greetUser()
square(4)
arrowSquare(4)
arrowSquare(5)
arrowSquare(6)

let userInputNum = 21
let returnValueFromAgeCheck = ageCheck(userInputNum)
console.log('Person over 21 = ' + returnValueFromAgeCheck)
