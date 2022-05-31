

var calcPockets = document.querySelector(".calculate_pockets")
var calcApples = document.querySelector(".calculate_apples")
var calculate = document.querySelector(".calculate")
var pockets = document.querySelector(".pockets")
var apples = document.querySelector(".apples")
var appleNo = document.querySelector(".appleNo")
var applePrice = document.querySelector(".applePrice")
var packetPrice = document.querySelector(".packetPrice")
var appleProfit = document.querySelector(".appleProfit")


const applesSold = ApplesBox()

function countPockets() {
    applesSold.setAppleNumber(setAppleNumber.value)
    applesSold.setApplesInPacket(setApplesInPacket,value)
    // applesSold.packsNeeded()
    pockets.innerHTML = applesSold.packsNeeded()
}

function countApples() {
    applesSold.setPacketNo.value
    applesSold.setApplesInPacket.value
    apples.innerHTML = appleStore.applesNeeded.value;
}

function countApplePrice() {
    applesSold.setNoOfApples()
    applesSold.setPricePerBox()
    applePrice.innerHTML = applesSold.applePrice()
}
calculate.addEventListener("click", countApplePrice)
calcApples.addEventListener("click", countApples)
calcPockets.addEventListener("click", countPockets)
