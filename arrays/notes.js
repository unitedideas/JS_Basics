// const notes = ['note 1', 'note 2', 'note 3']
const notes = [{},{
    title: 'My next trip',
    body: 'I would like to go to spain',
}, {
    title: 'Habits to improve',
    body: 'eating a bit better',

}, {
    title: 'Office Mods',
    body: 'Get a new chair',

}]


// console.log(notes.pop())
// notes.push('pushed note')

// console.log(notes.shift())
// notes.unshift('My first note')

// notes.splice(1,1, 'marry')

// notes[0] = 'new note 1'

// notes.forEach(function(item, index, array){
//     console.log(item, index, array)
// })

console.log(notes.length)
console.log(notes)
console.log(notes.indexOf('study'))

for (let i = notes.length-1; i != 0; i--){
    console.log(notes[i])
}
for (let count = 0; count < notes.length; count++){
    console.log(notes[count])
}

console.log('-----------------------------------------------------')


