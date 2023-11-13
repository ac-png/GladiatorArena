class Gladiator {
    // private properties
    #name;
    #weapon;

    constructor(_name, _weapon) {
        this.#name = _name;
        this.#weapon = _weapon;
    }

    // getters and setters
    get name() {
        return this.#name;
    }

    get weapon() {
        return this.#weapon;
    }

    set name(_name) {
        this.#name = _name;
    }

    set weapon(_weapon) {
        if (this.#weapon === "Spear" && this.#weapon === "Trident" && this.#weapon === "Club") {
            this.#weapon = _weapon;
        } else {
            console.error(`${_weapon} is not valid`)
        }
    }
}

export default Gladiator;