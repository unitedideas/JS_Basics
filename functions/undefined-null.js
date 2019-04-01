// variable assigned undefined 
let name

console.log(name)

// name = 'Shane'

if (name === undefined){
    console.log('please provide a name')
} else {
    console.log(name)
}


//undefined for function arguments
//undefined as the function retun default value
let square = (num)=>{
    console.log(num)
    // return num*num
}

let result = square()
console.log(result)

//
let age = 28
//to clear variable value
//null as assigned value
age = null
console.log(age)