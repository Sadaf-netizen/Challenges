class Pet { //Pet is class
    constructor (name,age, type, breed, colour, time) {
        this.name = name; // this.name is object content
        this.age = age;
        this.type = type;
        this.breed = breed;
        this.colour = colour;
        this.lastfed = time;
    }
    feedPet (time) {
   this.lastfed = time;
   return `Last feed updated to:${this.lastfed} for ${this.name}`;
    }
}
const bella3 = new Pet("Bella", 2, "Dog", "GS", "B&t", "08:00");
console.log(bella3.feedPet("15:00"));

class PetMeds extends Pet {
    constructor (name, age, type, breed, colour, time, mtime) {
        super(name, age, type, breed, colour, time);
        this.lastMeds = mtime;
    }
        giveMeds (time) {
        this.lastfed = time;
   return `Last feed updated to:${this.lastfed} for ${this.name}`;
    }
    }
const bella = new Pet("Bella", 2, "Dog", "GS","B&T","08:00");
console.log(bella.feedPet("15:00"));

const dojo = new PetMeds("Dojo",3, "Cat", "PS", "T&B", "05:00","13:00");
console.log(dojo.feedPet("18:00"));

const betty = new Pet ("Betty", 4, "Dog", "SH", "White", "10;00");
console.log(betty.feedPet("14:00"));


class Pet1 {
        constructor(name, age, type, breed, colour, time) {
             this.name = name;
           this.age = age;
            this.type = type;
            this.breed = breed;
            this.colour = colour;
            this.lastFed = time;
         }
         get petInfo () {
            return `${this.name} is a ${this.type}, ${this.age} year (s) old` ;
         }
         feedPet (time) {
            this.lastFed = time;
            return `Last feed updated to: ${this.lastFed} for ${this.name}`;
         }
        }
        const bella1 = new Pet("Bella", 2, "Dog", "GS","B&T","08:00");
        console.log(bella1.petInfo);

        