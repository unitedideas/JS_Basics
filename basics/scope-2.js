//Global(name)



let name = 'Global'
if (true) {
    //variable shadowing
    let name = 'If 1'
    console.log(name)
    if (true) {
        console.log(name)
        name = 'If 2'
        console.log(name)
    }
    console.log(name)
}

if (true) {

}