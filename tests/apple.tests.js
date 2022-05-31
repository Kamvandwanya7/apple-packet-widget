describe("describe my apples function", function(){
    it("It should be able to calculate packets needed", function(){
        var appleStore= ApplesBox();
        appleStore.setAppleNumber(30)
        appleStore.setApplesInPacket(6)
        var appls= appleStore.packsNeeded()
        assert.equal(5, appls)
    })

    it("It should be able to calculate apples needed", function(){
        var appleStore= ApplesBox();
        appleStore.setPacketNo(40)
        appleStore.setApplesInPacket(5)
        var appls= appleStore.applesNeeded();
        assert.equal(200, appls);
    })


    it("It should be able to calculate cost price per apple", function(){
        var appleStore= ApplesBox();
        appleStore.setNoOfApples(120)
        appleStore.setPricePerBox(40)
        var appls= appleStore.applePrice();
        assert.equal(3, appls);
    })


    it("It should be able to calculate cost price per packet", function(){
        var appleStore= ApplesBox();
        appleStore.applePrice(3)
        appleStore.setApplesInPacket(5)
        var appls= appleStore.packetPrice();
        assert.equal(16, appls);
    })

    it("It should be able to calculate profit", function(){
        var appleStore= ApplesBox();
        appleStore.setProfit(0.50);
        appleStore.setPricePerBox(80);
        var appls= appleStore.getProfit();
        assert.equal(40, appls);
    })
})