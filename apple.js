function ApplesBox() {
    var appleBoxCost = 0;
    // var applesInBoxCount= 0
    var numberOfApples = 0;
    var packetsCount = 0;
    var packetsSize = 0;
    let costPerApple= 0;
    var packets = 0;
    var packetsSize1 = 0;
    var totalApplesInBox = 0;
    var requiredProfit = 0;

    function setAppleNumber(appleNumber) {
        numberOfApples = Number(appleNumber);
    }

    function setApplesInPacket(numberOfApplesInPacket){
        packetsSize= Number(numberOfApplesInPacket)
    }
    function getApplesInPacket(){
        return packetsSize;
    }

    
    function getAppleNumber() {
        return numberOfApples;
    }

    function setPacketsSize(packSize) {
        packetsSize = Number(packSize);
    }

    function getPacketsSize() {
        return packetsSize;
    }

    function setPacketNo(packNo) {
        packetsCount = Number(packNo);
    }

    function getPacketNo(){
        return packetsCount;
    }

    function setPricePerBox(boxPrice) {
        appleBoxCost = Number(boxPrice);
    }

    function getPricePerBox(){
        return appleBoxCost;
    }
 
    function packsNeeded() {
        return numberOfApples/packetsSize;
    }
    
    function applesNeeded() {
        return packetsCount*packetsSize;
    }

    function costOfApple(){
       return appleBoxCost/packetsSize;
    }
    
    function setNoOfApples(noApples){
      totalApplesInBox= Number(noApples)
    }
    function getNoOfApples(){
     return totalApplesInBox
    }
    function setProfit(profit){
      requiredProfit= Number(profit);
    }
    function getProfit(){
       return appleBoxCost*requiredProfit;
    }
    function packetPrice(){
        return packetsSize*(totalApplesInBox/appleBoxCost)
    }

    function applePrice(){
        return totalApplesInBox/appleBoxCost
    }

    return {
        packetPrice,
        applePrice,
        setNoOfApples,
        getNoOfApples,
        setProfit,
        getProfit,
        costOfApple,
        getApplesInPacket,
        setPricePerBox,
        getPricePerBox,
        applesNeeded,
        setAppleNumber,
        getAppleNumber,
        setPacketsSize,
        getPacketsSize,
        packsNeeded,
        setPacketNo,
        getPacketNo,
        setApplesInPacket,
        getPacketsSize
    }
}