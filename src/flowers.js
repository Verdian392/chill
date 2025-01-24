class Flowers extends Upgrade {
    constructor(upgradeName, cost, guardian) {
        super(upgradeName, cost);
        this.guardian = guardian;
    }

    purchase() {
        super.purchase();
        clickStrength++;
        this.guardian.doubleUpgrade++;
        this.guardian.applyUpgrade();
    }
}