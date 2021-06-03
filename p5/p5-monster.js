module.exports = class Monster {
    constructor({
        monsterName = "unknown",
        minimumLife = 0,
        currentLife = 100,
    }) {
        this.monsterName = monsterName;
        this.minimumLife = minimumLife;
        this.currentLife = currentLife;
        this.isAlive = (currentLife >= minimumLife) ? true : false;
        console.log("isAlive status: " + this.isAlive)
    }

    updateLife(lifeChangeAmount) {
        this.currentLife = this.currentLife - lifeChangeAmount;
        this.currentLife = (this.currentLife < 0) ? this.currentLife = 0 : this.currentLife = this.currentLife;
        this.isAlive = (this.currentLife < this.minimumLife) ? this.isAlive = false : this.isAlive = true;
        console.log("CurrentLife: " + this.currentLife)
        return this.currentLife;
    }

    getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min) + max);
    }

    randomLifeDrain(minimumLifeDrain, maximumLifeDrain) {
        if (minimumLifeDrain < maximumLifeDrain) {
            maximumLifeDrain = maximumLifeDrain + 1;
            let result = this.updateLife(this.getRandomInteger(1, 30));
            console.log(this.getRandomInteger(1, 30));
            console.log(result);
            return result
        }
    }


}

