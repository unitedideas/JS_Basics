//global scope (convertfer....., tempOne, tempTwo)
    //local scope (f, celcius)
        //local scope (isFreezing)

let convertFehrenheitToCelcius = (f) => {
    let celcius = (f - 32) * 5 / 9

    if (celcius <= 0) {
        let isFreezing = true
        console.log(celcius)
    }
    return celcius
}

let tempOne = convertFehrenheitToCelcius(32)
let tempTwo = convertFehrenheitToCelcius(68)
console.log(tempOne)
console.log(tempTwo)
