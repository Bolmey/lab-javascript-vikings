// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack = () => {
        return this.strength
    }

    receiveDamage = (damage) => {
        this.health -= damage
    }

}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }

    receiveDamage = (damage) => {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else return `${this.name} has died in act of combat`

    }

    battleCry = () => {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }



    receiveDamage = (damage) => {
        this.health -= damage;
        if (this.health > 1) {
            return `A Saxon has received ${damage} points of damage`
        } else return `A Saxon has died in combat`
    }
}

// War
class War {

    vikingArmy = [];
    saxonArmy = [];


    addViking = (viking) => {
        this.vikingArmy.push(viking)
    }

    addSaxon = (saxon) => {
        this.saxonArmy.push(saxon)
    }
    //viking attack
    vikingAttack = () => {
        let saxonSoldier = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let vikingSoldier = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];



        if (saxonSoldier.health <= vikingSoldier.strength) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(saxonSoldier), 1)
        }
        return saxonSoldier.receiveDamage(vikingSoldier.attack());

    }


    saxonAttack = () => {
        let saxonSoldier = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let vikingSoldier = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];



        if (vikingSoldier.health <= saxonSoldier.strength) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(vikingSoldier), 1)
        }
        return vikingSoldier.receiveDamage(saxonSoldier.attack());
    }

    showStatus = () => {
        if (this.saxonArmy.length == 0) {
            return "Vikings have won the war of the century!"
        }

        if (this.vikingArmy.length == 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else return "Vikings and Saxons are still in the thick of battle."



    }
}
