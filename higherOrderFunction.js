const whichGreeting = (timeofDay) => {
    console.log(`Good ${timeofDay}`);
}
const greet = (time, fn) => {
    if(time < 1200){
         fn("Morning");
    }else if (time >= 1200 && time < 1800){
         fn("Afternoon");
    }else{
         fn("Evening");
    }
    }
    greet(1500, whichGreeting);


    const add = (num1) => {
        return (num2) => {
             return num1+num2;
        }
    }
//  console.log(add(2));  //return the function in main function
console.log(add(2)(1)); // 1 was passed to the function that sit inside the main function
