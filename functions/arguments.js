//multiple arguments

let add = (a, b, c) => {
    return a + b + c
}

console.log(add(1, 2, 3))

//defualt perameter values
let add2 = (a = 1, b = 5, c = 10) => {
    return a + b + c
}

console.log(add2(1, 2))
console.log(add2(1, 2, 3))
console.log(add2(20, undefined, 3))

//challenge
let getTip = function (total, tipPercent = .2) {
    return total += (total * tipPercent)
}

console.log(getTip(21.00))
console.log(getTip(21.00, .07))