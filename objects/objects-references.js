let myAccount = {
    name: 'Shane',
    expences: 0,
    income: 0
}

let otherAccount = myAccount
otherAccount.income = 1000

let addExpense = function(account, amount){
    account.expences += amount
}

// reference object
addExpense(myAccount, 2.50)

console.log(myAccount)

