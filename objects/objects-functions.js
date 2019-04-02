let myBook = {
    title: '1984',
    author: 'Gerore Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zan',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} long.`
    }
}

let bS = getSummary(myBook)
let otherBSgetSummary = getSummary(otherBook)

console.log(bS.pageCountSummary, otherBSgetSummary.summary)

//challenge

let convert = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celcius: ,
        kelvin: 

    }
}