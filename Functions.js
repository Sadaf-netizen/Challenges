const holidayDestination = () => {
 console.log("Yay, I'm going on holidays!")
}
 holidayDestination() //here you are calling the functions
// activity1
const sayHello = (Park, Snacks) => {
console.log(`Hi there, how are you? Go to  with me and have snacks` )
}
sayHello()
// Activity 2
const sayHellow2 = (myName, drink) => {
    console.log(`Hi I'm ${myName}. Do you like to have some ${drink} with me`)
}
sayHello("Sara", "Coke")

const holidayDestination1 = (country,month) => { //country and month are parameters)
console.log(`Yay im going on holidays ${country} in ${month}. I can't wait.`)
}
holidayDestination1()

const holidayDestination2 = (country, month) => {
console.log(`Yay I'm going on holidays to ${country} in ${month}. I can't wait`)
}
holidayDestination2 ("Spain", "June") //spain and june are arguments

const inventory = (productcode, departmentName, quantity) => {
    console.log(`${quantity}of ${productcode} sold from ${departmentName}department, need to updatestock by ${quantity}`)
}
inventory(412345, "baked goods", 65)

const multiply = (num1, num2) => {
    return num1 * num2
}
console.log(multiply(2,5))

//Arrow functions
const addMe = (num1,num2) => {
    return num1 + num2
}
addMe(4,5)

// function declaration
function addMe1(num1,num2)  {
    return num1 + num2
}
addMe1(4,5)

//  expressions functions
const addMe2 =function(num1,num2)  {
    return num1 + num2
}
addMe2(4,5)

const replenishstock = (productCode) => {
    console.log(`order product number ${productcode} stock is low!`)
}
const reducePrice = (productCode, originalPrice) => {
    let salePrice = originalPrice /= 2
    console.log(`Product Number ${productCode} is now £${salePrice}`)
}
const checkStock = (productCode, quantity, originalPrice) => {
    if (quantity <= 10) {
        replenishStock (productCode)
    }else if (quantity > 100) {
        reducePrice(productCode, originalPrice)
    }else{
        console.log("Don't order stock")
    }
}
checkStock(345678,200,100)

