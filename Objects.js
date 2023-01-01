const person = {
  firstName: "Sally",  // we store data inside the object using key value pair
    lastName: "Evans",
    age: 27,
occupation: "sales Assistant",
married: false,
homeOwner: false,
hobbies:["tennis" ,"gardening", "bungee", "jumping"]
}
// 
// Object.property
// person.firstNamne
// console.log(person.firstName)

// object.property
// person.firstName
// console.log(person["firstName"])

// Activity 1
const pet = {
    petName: "Dojo",
    typeOfPet: "German Shepherd",
    age: 1,
    colour:"White",
    features: ["well behaved","friendly", "loyal", "courageous"] // data can be any type it can be array

}

console.log (`My pet name is a ${pet.petName}`)

person.homeOwner = "true"
console.log(person)

// Activity2
pet.colour = "White"
console.log (pet.colour)
    
const pet1 = {
    petName: "Dojo",
    typeOfPet: "German Shepherd",
    age: 1,
    colour:"White",
    petFeatures: ["well behaved","friendly", "loyal", "courageous"]
}

console.log (`My pet features are ${pet1.petFeatures}`)

let day = "Monday"
const person1 = {
firstName: "Sally",
    lastName: "Evans",
    age: 27,
occupation: "Sales assistant",
married: false,
homeOwner: false,
hobbies:["tennis" ,"gardening", "bungee", "jumping"]

}

 if (day === "Saturday" || day === "Sunday") {
    console.log (`Great it's ${day},let's play £{person.hobbies[0]}!`)
 }else{
    console.log(`oh no! It's ${day} I hate being a ${person.occupation}" `)
 }

 const person2 = {
    firstName: "Sally",
    lastName: "Evans",
    age: "40",
    occupation: "Sales assistant",
    marries: false,
    homeOwner: true,
    hobbies:["tennis" ,"gardening", "bungee", "jumping"],
    marketingOp () { // when we use functionwithinin object we call them method
          if (this.homeOwner == false && this.age > 25) { // Home owner was outside of function scoop so we use this key word this.homeowner
            return "Send mortgage offer email."
        }
        else if (this.homeOwner == false && this.age > 25) { 
            "Send summer holiday fun credit card offer."
        }
            else if (this.homeOwner == true && this.age > 25) { 
                return "Return pension offer. "
            }
            else {
                return "Send sensible Savings offer. "
            }
      }
    }

    console.log(person2.marketingOp())

// // Activity 4
 const pet3 = {
    petName: "Russia",
    typeOfPet: "German Shepherd",
   age: 5,
   colour: "black"
 }

pet.eat = true
 pet.drink = true
 console.log(pet)

pet.describe = () => {
   if (this.eat == true && this.drink == true){
         console.log(`${pet.petName} is eating and drinking.`)
    }
    else if (this.eat == true && this.drink == false){
        console.log(`${pet.petName} is eating.`)
    }
     else if (this.eat == false && this.drink == true){
         console.log(`${pet.petName} is drinking.`)
     }

     else {
       console.log(`${pet.petName} is not currently eating and drinking.`)
     }
}

 pet.describe()

// class Pet {
//     constructor(name, age, type, breed, colour, time) {
//         this.name = name;
//         this.age = age;
//         this.type = type;
//         this.breed = breed;
//         this.colour = colour;
//         this.lastFed = time;
//     }
//     feedPet (time) {
//         this.lastFed = time;
//         return `Last feed updated to: ${this.lastFed} for ${this.name}`;
//     }
// }
//     const bella = new Pet("Bella", 2, "Dog","GS", "B&T","08:00");
//     console.log (bella.feedPetd("15:00"));

    
// Activity 5
const coffeeShop =  {
branch: "City Center",
drinkWithPrices:[ " Latte £2.5 (small cup), Mocha £3 (medium cup)"] ,
foodWithPrices: ["Sandwiches £5, croosant £4", "Cake £3"],
foodOrdered: true,
drinkOrdered: true,

describe  ()  {
    if (this.foodOrdered == true && this.drinkOrdered == true){
        console.log(`Your order is ready with all items chosen with costs, and the total cost.`)
    }
    else if(this.foodOrdered == true && this.drinkOrdered == false){
        console.log(`only food is ready and drinks are not ready`)
}
else if(this.foodOrdered == false && this.drinkOrdered == true){
    console.log(`only drinks are ready and food is not ready`)
}
else{
     console.log(`Your order is not ready with all items chosen with costs, and the total cost.`)
}
}
}
coffeeShop.describe()

class Pet {
    constructor (name,age, type, breed, colour, time) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.breed = breed;
        this,colour = colour;
        this.lastfed = time;
    }
    feedPet (time) {
   this.lastfed = time;
   return `Last feed updated to:${this.lastfed} for ${this.name}`;
    }
}

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


const bella = new Pet("bella", 2, "Dog", "GS","B&T","08:00");
const dojo = new PetMeds("dojo",3, "Cat", "PS", "T&B", "05:00","13:00");
const betty = new Pet ("betty", 4, "Dog", "SH", "White", "10;00");
console.log(bella.feedPet("15:00"));
console.log(dojo.feedPet("18:00"));
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
        const bella1 = new Pet("bella", 2, "Dog", "GS","B&T","08:00");
        console.log(bella.petInfo);
