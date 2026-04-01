// function is a reusable block of code that performs a specific task. It can take inputs, called parameters, and can return an output.
//  Functions help to break down complex problems into smaller, manageable pieces and promote code reusability.

// Function declaration
function addTwoNumber (num1,num2){ // num1 and num2 are parameters
    console.log(num1+num2)

}
// addTwoNumber(10,30)//(10,30) are arguments

function addThreenum(num1,num2,num3){ // num1, num2, and num3 are parameters
    let result = num1+num2+num3;
    return result

}
let sum = addThreenum(20,30,40)
//console.log(sum)

// function logined(username){
//     return `${username} is logged in`
// }
// console.log(logined());// here we are not passing any argument to the function, so it will return "undefined is logged in" because the username parameter is not defined.

// function logined(username ="MANIKANTASAI"){// here we are assigning a default value to the username parameter, so if we don't pass any argument to the function, it will use the default value and return "MANIKANTASAI is logged in".
//     return `${username} is logged in`
// }
// console.log(logined());
function logined(username ="MANI"){ 
}
console.log(logined("PRANNY"));// HERE we are passing an argument "PRANNY" to the function, so it will override the default value and return "PRANNY is logged in".