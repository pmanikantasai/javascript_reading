//"switch statement" in JavaScript. It is a control flow statement that allows you to execute different blocks of code based on different conditions.
//The switch statement evaluates an expression and matches the expression's value to a case label,
//executing the associated block of code.
//syntax
// switch (expression) {
//     case value1:
//         // code to be executed if expression === value1
//         break;
//     case value2:
//         // code to be executed if expression === value2
//         break;
//     ...
//     default:
//         // code to be executed if expression doesn't match any case
// }

// break means to exit the switch statement, 
// if we don't use break, the code will continue to execute the next case, 
// even if the condition is not met.
//  This is called "fall through" and can lead to unexpected results.

const month = 3
switch(month){
    case 1 : 1
    console.log("January");
    break;// the break statement is used to exit the switch statement, if we don't use break, the code will continue to execute the next case, even if the condition is not met
    case 2 : 2
    console.log("February");
    break;
    case 3 : 3
    console.log("March");
    break;
    case 4 : 4
    console.log("April");
    break;
    case 5 : 5
    console.log("May");
    break;
    default:
    console.log("Invalid month");
}

// break is important in switch statements,
//  if we don't use break, the code will continue to execute the next case, 
// even if the condition is not met. 
// This is called "fall through" and can lead to unexpected results.