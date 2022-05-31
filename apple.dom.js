
var packet_sizeElem= document.querySelector(".packet_size")
var apples_countElem= document.querySelector(".apples_count")
var calcPockets = document.querySelector(".calculate_packets")
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
    applesSold.setAppleNumber(apples_countElem.value)
    applesSold.setApplesInPacket(packet_sizeElem.value)
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
calcPockets.addEventListener("click", countPockets)
calcApples.addEventListener("click", countApples)
