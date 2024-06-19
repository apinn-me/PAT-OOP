class Food {
    constructor(namefood, payment, place) {
        this.namefood = namefood;
        this.payment = payment;
        this.place = place;
    }
}

class Sambal extends Food {
    constructor(namefood, payment) {
        super(namefood, payment, true);
    }

    eat() {
        return `   ${this.namefood} Sangat pedas`;
    }
}

class Miee extends Food {
    constructor(namefood, payment) {
        super(namefood, payment, false);
    }

    room() {
        return `${this.namefood} Sangaat enak`;
    }
}

const mySambal = new Sambal("SAMBAL BAKAR", 20000);
const myMiee = new Miee("Miee Ramen", 35000);

console.log(mySambal.eat());
console.log(myMiee.room());
console.log(mySambal);
console.log(myMiee);
