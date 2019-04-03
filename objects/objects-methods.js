let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function(partySize){
        if (this.checkAvailability(partySize)){
        this.guestCount += partySize
    } else {
        console.log(`The party of ${partySize} will have to wait for more guests to leave.`)
    }},
    removeParty: function(partySize){
        this.guestCount -= partySize
    }
}


// seatParty
// removeParty

restaurant.seatParty(74)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(5))
restaurant.seatParty(5)
console.log(restaurant.checkAvailability(5))