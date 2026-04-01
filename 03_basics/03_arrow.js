// this keyword used for object reference
// arrow function does not have its own this keyword, it inherits from the parent scope
const person = {
    name:"manikanta",
    age: 25,
    getName: function() {
        console.log(this.name); // this refers to the person object
        console.log(this); // all.this refers to the person object
    }

}
// person.getName(); // Output: manikanta
// console.log(this); // Output: {} (global object)
// person.name = "praneetha"
// person.getName(); // Output: praneetha
// function one(){
//     console.log(this)
// }

// one() // here we all about this keyword in regular function, 
// // it refers to the global object (window in browsers, global in Node.js)



// arrow function does not have its own this keyword, 
// it inherits from the parent scope
const person2 = {
    name:"manikanta",
    age: 25,
    getName: () => {
        console.log(this.name); // this refers to the global object, not the person2 object
        console.log(this); // this refers to the global object
    }
    
}
//person2.getName(); // Output: undefined (because this.name refers to the global object, which does not have a name property)
const addTwo = (num1,num2) => {
    return num1 + num2;
}
//console.log(addTwo(10,20));

const square = num => num * num; // implicit return
//console.log(square(10))

// immediately invoked function expression (IIFE) with arrow function
(function IIFE (){
    // named function expression
    console.log ("I am an IIFE");
})();

(() =>{
    // unnamed function expression
    console.log ("arrow function IIFE")
})()


