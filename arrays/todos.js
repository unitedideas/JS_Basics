// create array with 5 todos
// print message - you have x todos
// print the first and second to last item in the array

const todo = ['walk dog', 'workout', 'study', 'send invites', 'attend meetup']

console.log(`You have ${todo.length} in your todo list`)

todo.forEach(function(item, index){
    console.log(`${index+1}: ${item}`)
})

// same as above
// for (let i = 0; i > todo.length; i++){
//     console.log(`${i}. ${todo[i]}`)
// }

