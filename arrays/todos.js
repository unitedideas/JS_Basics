// create array with 5 todos
// print message - you have x todos
// print the first and second to last item in the array

const todo = ['walk dog', 'workout', 'study', 'send invites', 'attend meetup']

console.log(`You have ${todo.length} in your todo list`)
console.log(todo.splice(2, 1))
console.log(todo.push('new push item'))
console.log(todo.shift())


console.log(todo)