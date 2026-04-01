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
//console.log(logined("PRANNY"));// HERE we are passing an argument "PRANNY" to the function, so it will override the default value and return "PRANNY is logged in".

// function cartAdd(...num){// here we are using the rest parameter syntax (...num) to allow the function to accept an indefinite number of arguments as an array. The num parameter will be an array containing all the arguments passed to the function.
//     console.log(num)

// }
// cartAdd(5,6,7)

// function cartAdd(val1,val2,val3,...num){// here first three parameters (val1, val2, val3) will take the first three arguments passed to the function, and the rest parameter (...num) will take the remaining arguments as an array.
//     console.log(num)


// }
// cartAdd(5,6,7,8,9,10)

const user = {
    name:"MANIKANTASAI",
    age: 25
    
}

function handleObject(anyObject) {
    console.log(`Hii !, my name is ${anyObject.name} and my age is ${anyObject.age}`)
}

// handleObject(user)
const ArrayOfObjects = [1,8,20,60,100]
function handleArray(arr){
    return arr[3]
}

let result = handleArray(ArrayOfObjects)
//console.log(result)
console.log(handleArray([10,20,30,40,50]))
