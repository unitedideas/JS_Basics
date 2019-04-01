let isAccountLocked = false
let userRole = 'admin'

if (isAccountLocked) {
    console.log('The account is locked')
} else if (userRole === 'admin') {
    console.log('Welcome Admin')
} else {
    console.log('Welcome')
}


let temp = 130

if(temp <= 45){
    console.log('It\'s freezing outside.')
}else if (temp >= 120){
    console.log('It\'s hot outside.')
}else{
    console.log('Go for it it\'s perfect.')
}
