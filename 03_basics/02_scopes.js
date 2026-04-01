//Global Scope :
//Variables declared outside any function or block belong to the global scope.
let a=20
var b=30
const c=40

//Block Scope
//Variables declared with let and const inside {} blocks are only accessible within that block.
if(true){
    let a=100
    var b=200
    const c=300
    //console.log("Inside block scope:",a,b,c) //100 200 300
}
//console.log("Outside block scope:",a,b,c) //20 200 40
// here var b is accessible outside the block scope and it has been updated to 200, 
// while let a and const c are not affected by the block scope and retain their original values.

// function scope
// Variables declared with var inside a function are function-scoped,
//  meaning they are only accessible within that function.
function my1() {
    const username = "manikantasai"
    function my2(){
        let age=25
        console.log("Inside my2 function:",username) //manikantasai
    }
    //console.log (age)// ReferenceError: age is not defined because age is block-scoped to my2 function and cannot be accessed in my1 function.

  
    console.log("my1 function scope: ",username);
    my2() // here we are calling my2 function inside my1 function,
    //  so it can access the username variable declared in my1 function scope.
    
}

my1()