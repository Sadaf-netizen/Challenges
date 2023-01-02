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
const bella1 = new Pet("Bella", 2, "Dog", "GS", "B&t", "08:00");
console.log(bella.feedPet("15:00"));

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
// const bella = new Pet("Bella", 2, "Dog", "GS","B&T","08:00");
// console.log(bella.feedPet("15:00"));

const dojo = new PetMeds("Dojo",3, "Cat", "PS", "T&B", "05:00","13:00");
console.log(dojo.feedPet("18:00"));

const betty = new Pet ("Betty", 4, "Dog", "SH", "White", "10;00");
console.log(betty.feedPet("14:00"));

// getters do not need parameters when called they are meant to retrieve data
class Pet {
    constructor(name, type, breed, colour, time) {
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
const bella2 = new Pet("Bella", 3, "Dog", "GS", "B&T", "08;00"); 
console.log(bella.petInfo);

// //   setters 
class Pet3 {
    constructor(firstname, surname, age, type, breed, colour, time) {
        this.firstname = firstname;
        this.lastname = surname;
        this.age = age;
        this.type = type;
        this.bread = breed;
        this.colour = colour;
        this.lastFed = time;
    }
    get petInfo () {
        return `${this.firstname} is a ${this.type}, ${this.age} year (s) old` ;
        
    }
    set fullName (name) {
        const array = name.split('');
        this.firstname = array[0];
        this.surname = array[1];
    }
    feedPet (time) {
        this.lastFed = time;
        return `Last feed updated to: ${this.lastFed} for ${this.firstname}`;
    }
}
const bella = new Pet3 ("Bella", "", 2, "Dog", "GS", "B&T", "08;00"); 
console.log(bella);
bella.fullName = "Bella Crompton"
console.log(bella);
console.log(bella.fullName)
        