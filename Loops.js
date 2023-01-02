
// Activity 1
let favHolidaysDestinations = [
    "Venice, Italy",
    "Paris, France",
    "Barcelona, Spain",
    "Portugal, Germany",
    "Sweden, Holland"
    
]
for (let i = 0; i < favHolidaysDestinations.length;  i+=2) {
     console.log(favHolidaysDestinations[i])
 }
// initial expression; condition; increment,decrement expressions do stuff
// try this
 for (let i = 0; i <= 10; i++){
 console.log(i += 2)   
 }

 let evenNumbers=[]
for (let n = 0; n < 20; n++){
  if(n % 2 == 0) {
  (evenNumbers.push(n))
  }  
 }
 console.log(`The even numbers between 0 and 20 are ${evenNumbers}`)


 let lives = 5
 while (lives > 0){
  console.log ("Well done! You'r still in the game.") 
 lives--
}
  console.log("Game over!!!")
//   -- decrement means we move from 5 4 3 2 1

 let currentDiceRoll = "3"
 while (currentDiceRoll != 1){
     console.log(currentDiceRoll)
     currentDiceRoll = Math.floor(Math.random()*6)+1
 }
 console.log(currentDiceRoll)
//  != (not equal to)
// currentDiceRoll is a global variable
// math.random generate no between 0 to 1 it will be a decimal no
// Math.floor gives the whole no
// +1 has to add because the no is between 1 to 5  and for dice we have to make 6

// //  Activity 4
// /ARRAY FOR THE RANDOM NUMBERS
let numbers = [];

while(numbers.length < 6){
    // GENERATES A RANDOM NUMBER
    randomNumber = Math.floor(Math.random() * 100)

    // PRINTS THE RANDOM NUMBER
    console.log(randomNumber)

    // STORES NUMBERS IN THE ARRAY
    numbers.push(randomNumber)
}

// Activity 2 loops

 let newEvenNum = []

 for (let x=20; x >= 0; x--){
    if (x % 2 == 0)[
         (newEvenNum.push(x))
     ]
 }
console.log(`In reverse order, the numbers between 0 and 20 are; ${newEvenNum}`)

// // Activity 3

let oddNum = []

for (let y=1; y <= 30; y++){
    if (y % 2 == 1)[
        (oddNum.push(y))
    ]
}
console.log(`The odd numbers between 1 and 30 are; ${oddNum}`) 

// //  activity 3
// define age as a random number

let age = Math.floor(Math.random() * 20);

// while age is less than 18

while(age < 18){
    
// log "You're a child!"
// assign a new random number to age

    console.log("You're a child!")
    age = Math.floor(Math.random() * 100)
}

//if age is 18 or more then return "You're an adult!"

console.log("You're an adult!")

// Activity 6 / Generate a random number btw 1 and 30 six times
// Check whether divisible by 7 or not, inform user of outcome

let numberRandom = [];
i = 0

for (i = 0; i < 6;) {
numberRandom = Math.floor(Math.random()*30)+1
i++
    console.log(`The random number is ${numberRandom}`)
    if (numberRandom % 7 == 0) {
        console.log(`${numberRandom} is divisible by 7\n`)
    }
    if (numberRandom % 7 != 0) {
        console.log(`${numberRandom} is not divisible by 7\n`)
     }
}

// Activity 5
let favFilms = [
    "Titanic",
    "Gladiator",
    "Bulbul",
    "Pukar"
]
for (let i = 0; i < favFilms.length; i++) {
    console.log(favFilms[i])

// check if third film is Ghostbusters    

if (filmNumber == 2 && films[2] == "Bulbul"){
    console.log("Yoo it's Bulbul!")
}   else if (filmNumber == 2 && films[2] != "Bulbul"){
    console.log("Oh noo! We want Bulbul!")

// for the first, second and fourth films just log the name of the film

}   else{
    console.log(films[filmNumber])
}
}




















