let num = 103.941

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 0
let max = 1
let randNum = Math.floor(Math.random() * (max - min + 1)) + min

// console.log(randNum)

//challenge
// range 1-5 true if correct, false if not correct


let guessGame = function(guess){
    let min = 1
    let max = 5
    let randNum = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(randNum)
    return guess === randNum
}

console.log(guessGame(3))