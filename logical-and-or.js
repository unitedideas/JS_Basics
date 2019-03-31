let temp = 55

// && : and operator - Both have to be true
// || : or operator - Only one has to be true

if (temp >= 60 && temp <= 90){
    console.log('It is pretty nice outside.')
} else if (temp <= 0 || temp >= 120){
    console.log('Do not go outside')
} else{
    console.log('eh... Do what you want!')
}

let isGuestOneVegan = true
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer vegan options')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Make sure to offer vegan options')
}else{
    console.log('Offer everything on the menue')
}