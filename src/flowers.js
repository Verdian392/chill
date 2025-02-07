class Flowers extends Upgrade {
    constructor(upgradeName, cost, buttonLabel, guardian) {
        super(upgradeName, cost, buttonLabel);
        this.guardian = guardian;
    }

    purchase() {
        super.purchase();
        clickStrength++;
        this.guardian.doubleUpgrade++;
        this.guardian.applyUpgrade();
    }
}