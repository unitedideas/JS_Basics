let name = 'Shane'
let age = 27

// use ` + ${}
// ${} = JS expression
console.log(`Hey my name is ${name}. I am ${age}.`)


//challenge
let getTip = function (total, tipPercent = .2) {
    let percnetage = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percnetage}% tip on $${total} would be $${tip}.`
    //or
    // return `A ${percnetage}% tip on $${total} would be $${total * tipPercent}.`

}

console.log(getTip(40.00, .25))