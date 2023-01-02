 let firstName="Sadaf"
 let age=40
 let universitystudent = true

 // Activity 1
 console.log("Hello World")
 console.log(firstName)
console.log(age)
 console.log(universitystudent)

 firstName = "Aisha"
 console.log(firstName)
 let modelofCar ="Volvo"
console.log("I drive a " + modelofCar)
 let occupation = ("Software Developer")
console.log("Hi, my name is" + firstName +". I'm a " +occupation+ " and I drive a " + modelofCar)
 console.log("Hi my name is ${firstName}. I'm a ${occupation} and I drive a ${modelofCar}.")

//  let a = 3
//  a = a + 5
//  console.log(a) 

let a= 3
 a += 5
console.log(a)

// Activity2
 let myName = "Sadaf"
 let myAge = "30"
let favouriteColour = "Purple"
 console.log(`Hi, my name is ${myName}. I'm ${myAge} and my favourite colour is ${favouriteColour}.`)

// Activity 3
 let breakFast = "Fried Eggs"
 let  lunch = "Biryani"
let dinner = "Grilled Chicken"
 console.log(`In the breakfast I had ${breakFast}. I ate ${lunch} in lunch and for the dinner I had ${dinner}.`)
// test for github

 let modelOfCar = "Volvo"
 console.log("I drive a" + modelOfCar)

 let firstName2 = "Ifra"
 let modelOfCar2 = "Marcedes"
 let occupation2 = "Parmacist"
 console.log(`My name is ${firstName}. I,m a ${occupation} and I drive a ${modelOfCar}.`)

//  Activity 4
 let todaytDate = new Date()
 let nextBirthday = new Date("16/5/2023")

 const difTime = nextBirthday.getTime() - todaytDate.getTime() 
 const difDays = difTime / (1000*60*60*24)
 const roundedDays = Math.round(difDays)

 console.log(`The total number of milliseconds between today and your next birthday is ${difTime} milliseconds.`)
 console.log(`Hence, the total number of days between today and your next birthday is ${difDays} days.`)
 console.log(`So, the total rounded number of days between today and your next birthday is ${roundedDays} days.`)

//  extension
let todaytDate1 = new Date()
 let nextBirthday1 = new Date("16/5/1986")

 const changeInTime = today.getTime() - dob.getTime() 
 const changeInDays = ChangeInTime/ (1000*60*60*24)
 const roundedChangedInDays = Math.round(changeInDays)
 console.log(`The total no of milliseconds between today and your next birthday is ${difTime1} millisceonds.`)
 console.log(`The total no of days between your birthday and todays date is ${changeInDays} days.`)
 console.log(`The total rounded no of days between your date of birth and today is ${roundedChangedInDays1} days.`)




// your birtday
let myBirthDate = new Date (1987, 0, 1);
 let varToday = new Date();
//  set the current year or next year if you already had birthday this year
birthday.setFullYear(today.getFullYear());
if (today > birthdays) {
    myBirthDate.setFullYear(today.getFullYear() + 1);
}
// calculate difference between days
Math.floor((birthday - today) / (1000*60*60*24))