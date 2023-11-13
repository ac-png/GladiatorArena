import Gladiator from "./Gladiator.js";

class Arena {
    // private properties
    #gladiators;
    #name;

    constructor(_name) {
        this.#name = _name;
        this.#gladiators = [];
    }

    // getters and setters
    get name() {
        return this.#name;
    }

    get gladiators() {
        return this.#gladiators;
    }

    set name(_name) {
        this.#name = _name;
    }

    set gladiators(_gladiators) {
        this.#gladiators = _gladiators;
    }

    // adds new gladiator to arena
    addGladiator(_gladiator) {
        if (_gladiator instanceof Gladiator) {
            if(this.#gladiators.length < 2) {
                this.#gladiators.push(_gladiator);
            }
        }
        else {
            console.error(`${_gladiator} is not a gladiator`);
        }
    }

    // calling a fight method
    fight() {
        if (this.#gladiators.weapon = "Trident") {
            console.log("Trident Wins!");
        }
    }
}

export default Arena;