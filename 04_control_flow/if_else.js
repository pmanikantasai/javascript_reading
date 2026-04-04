// if statements 
// if condition is true, run the code block
// if condition is false, skip the code block
//operaters: >, <, >=, <=, ==, ===, !=, !==

// const age =23;
// if (age > 18){
//     console.log ("your are an adult");
// }else{  //else is optional, it runs if the condition is false
//     console.log("your a minor");   
// }

// let score=70;
// if (score >= 90){
//     console.log("A");
// }else if (score < 80){
//     console.log("B")} // output is else condition is true, so it will print B

// const score = 85;
// if (score>= 80){
//     const grade = "A";
//     console.log(`grade: ${grade}`)
// }

//console.log(grade) // this will give an error because grade is defined inside the if block,
//  it is not accessible outside the block

//short hand if statement
// condition ? true : false
// const age =18
// if(age ===18) console.log("test is true"); // this is a short hand if statement, it is only one line of code, so we can omit the curly braces

// if ,elseif statements

// const score= 60;
// if(score >= 90){
//     console.log("A")
// }else if (score >=80 ){
//     console.log("B");   
// }else if (score >= 50){
//     console.log("D");
// }else{
//     console.log("f")
// }

// and ,or operators

// and operator (&&) - both conditions must be true

// const num=10;
// if (num >2 && num<11){
//     console.log("number is between 2 and 11");
// }

// or operator (||) - at least one condition must be true
const num =10
if (num>5 || num >20){// this condition is true because num is greater than 5, even though it is not greater than 20
    console.log("number is greater than 5 or 20");
}