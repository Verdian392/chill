class Guardian {
    constructor(guardianName, baseCPS, baseCost, buttonLabel) {
        this.guardianName = guardianName;
        this.baseCPS = baseCPS / (1000 / tickRate);
        this.baseCost = baseCost;
        this.cost = baseCost;
        this.buttonId = "buy" + guardianName.replace(/\s/g, "");
        this.amountOwned = 0;
        this.doubleUpgrade = 1;
        this.cps = 0;
        this.visible = false; 
        this.buttonLabel = buttonLabel;

    }
    purchase(){
        score -= this.cost;
        this.amountOwned++;
        this.applyDoubleUpgrade();
        this.cost = Math.ceil(this.cost * 1.15 ** this.amountOwned);
    }
    
    applyDoubleUpgrade(){
        this.cps = this.baseCPS * this.amountOwned * this.doubleUpgrade;
    }

    buttonState() {
        if (!this.visible) {
            document.getElementById(this.buttonId).style.display = "none";
            if (score >= this.baseCost) {
                this.visible = true;
                document.getElementById(this.buttonId).style.display = "initial";
            }
        }
        if (score < this.cost) {
            document.getElementById(this.buttonId).disabled = true;
        } else {
            document.getElementById(this.buttonId).disabled = false;
        }
        document.getElementById(this.buttonId).innerHTML =
        "Buy " +
        this.guardianName + 
        " (Cost: $" + 
        Math.ceil(this.cost).toLocaleString() + 
        ") <br> Adds $" + 
        (this.baseCPS * (1000 / tickRate)).toLocaleString() + 
        " Per second <br> [Owned: " + 
        this.amountOwned + 
        "]";
    }

    buttonStateOG() {
        if (!this.visible) {
            document.getElementById(this.buttonId).style.display = "none";
            if (score >= this.baseCost) {
                this.visible = true;
                document.getElementById(this.buttonId).style.display = "initial";
            }
        }
        if (score < this.cost) {
            document.getElementById(this.buttonId).disabled = true;
        } else {
            document.getElementById(this.buttonId).disabled = false;
        }
        document.getElementById(this.buttonId).innerHTML =
        "Buy " +
        this.buttonLabel +
        " (Cost: $" + 
        Math.ceil(this.cost).toLocaleString() + 
        ") <br> Adds $" + 
        (this.baseCPS * (1000 / tickRate)).toLocaleString() + 
        " Per second <br> [Owned: " + 
        this.amountOwned + 
        "]";
    }  
}