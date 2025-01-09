class Guardian {
    constructor(guardianName, baseCPS, baseCost, buttonId) {
        this.guardianName = guardianName;
        this.baseCPS = baseCPS / (1000 / tickRate);
        this.cost = baseCost;
        this.buttonId = buttonId;
        this.amountOwned = 0;
        this.cps = 0;
        this.visible = true; 
    }
    purchase(){
        score -= this.cost;
        this.amountOwned++;
        this.cps = this.baseCPS * this.amountOwned;
        this.cost = Math.ceil(this.baseCost * 1.15 ** this.amountOwned);
    }

}