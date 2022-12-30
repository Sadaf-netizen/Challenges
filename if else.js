//   Activity 1
let music = "Disco"
if (music == "Classical") {
    console.log("oh, how realxing")
}
else if(music == "Disco") {
    console.log("Where are my dancing shoes!")
}
else if(music == "Dance") {
    console.log("Where is the party?")
}
else{
    console.log("Turn it down")
}

let hunger = "Full"
if (hunger == "hungry") {
    console.log("Yes, please I'm starving!")
}
else if (hunger ="Starving"){
    console.log("No thanks, I'm stuffed!")
} 
else{
     console.log("oh go on then why not")
}

if (4 == "4") {
    console.log(true)    
    }
    else{
        console.log(false)
    }
if (4 != "4") {
    conaole.log(true)
}

else{

    console.log(false)

}


//  Activity 2
let ageServing = 18
if (age >= 18) {
    console.log("Yes i can serve you")
}
else{
    console .log("you are not old enough")
}


// Switch statement
let food = "sprouts"

switch(food) {
    case "ice cream":
    case"pizza":
    console.log("yay, let's eat")
    break
    case ("sprouts"):
    case("brocolli"):
    console.log("ugh, no thanks!")
    break
    default:
        console.log("ok, go on then, why not.")
}
let meal = "ice cream"
let hungero = "full"
if (hungero == "full" && meal == "ice cream") {
    console.log("off course, who wouldn't")
}
else if (hungero == "hungry" && meal == "ice cream"){
    console.log("Yes, please, I'm starving could I also have a pizza")
}
else if(hungero == "hungry" && meal == "sprouts"){
console.log("Actualyy, I can wait")
}
else{
    console.log("No thanks, I'm stuffed")
}
//  Activity 3

let age2 = 21
let country = "UK"

if (age2 >= 18 && country == "UK"){
    console.log("Yes I can serve you!")
} else{
    console.log("You cannot be served!")
}

// Activity 4
let weekDays = "Monday"
if(weekDays == "Saturday" || weekDays =="Sunday") {
console.log("Yay,it's the weekend!!" )
}
else{
console.log("oh no,work again!!")
}
// Activity 5
let topping = "olives"
switch(topping) {
    case "olives":
    case "bell pepper":
 console.log("These are the important ingredients of my pizza")
 break
 case "onions":
case "sauce":
console.log("I dont mind having ${toppings}on my pizza")
break
case "random":
    console.log("${toppings} should not be on my pizza")
default:
    console.log("Go on then, I will have a slice")
}
// ACTIVITY 5
let password = 7
if (password.len <=7) {
console.log("Password is too short")
}
else{
    console.log("Your passwords seems fine")
}

// Activity 6
const num = "Fizzbuz"
if (n % 3 === 0 && n % 5 === 0) {
console.log("fizzbuzz")
}
else if(n % 3 === 0) {
    console.log("fizz")
}
else if (n % 5 === 0) {
    console.log("buzz")
}
else {
    console.log ("not divisible by 3/5", numbers)
}

let food1 = "Chips"
if (food == "ice cream" || food == "pizza") {
    console.log("Yay let 's eat!!!")
}
else if (food == "sprouts" || food == "brocolli") {
    console.log("ugh, no thanks")
}
else{
    console.log("Okay, go on then why not.")
}
// Activity 7
 let time = "7 o'clock"
let placeOfWork = "9 o'clock"
let townOfHome = "8 o'clock"
if (time == "7 o'clock") {
    console.log("I'm at home")
}
else if (placeOfWork == "9 o'clock") {
    console.log("I'm at office")
}
else if (townOfHome == "8 o'clock") {
    console.log("I'm commuting")
}
else {
    console.log( "I'm at shopping mall")
}
// Activity 8
let myString = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwsh';
let substr =  ['a','e','i','o','u'];

// calculate lastIndex for each vowel separately, then take the greatest
const lastVowel = Math.max.apply(null, substr.map(letter => myString.lastIndexOf(letter)));

console.log(lastVowel, myString[lastVowel]);

// Activity 11
// Note: Reverse method overwrites the original array, hence need numJoin before numReverseSplit.

let newNum = 10101

let numString = newNum.toString()
let numSplit = numString.split("")

let numJoin = numSplit.join()

let numReverseSplit = numSplit.reverse()
let numReverseJoin = numReverseSplit.join()

if (numJoin == numReverseJoin){
  console.log(`The number ${newNum} is a palindrome.`)
}
else {
  console.log(`The number ${newNum} is not a palindrome.`)
}










