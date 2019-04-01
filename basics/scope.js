//Lexical scoping (static scoping) block scoping

//Scope accessable via partent or ancestor scope

//Global scope (varOne)
    //Local scope (varTwo)
        //local scope (VarFour)
    //Local scope (varThree)

let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)

    if (true) {
        let varFour = 'varFour'
        console.log(varTwo)
    }
}

if (true) {
    let varThree = 'varThree'
}
console.log(varTwo)