// Object litreals



 const user = {
    name : "manikantasai",
    "fullName":"pallapu manikantasai",
    age : 23,
    email : "maniknatsai@gmail.com"
 }
    
// console.log(user.age)
// console.log(user["age"])

// user.email = "mani@gmail.com"
// //console.log(user["email"]);
// //Object.freeze(user) // freeze the object to prevent modification
// user.email="non"
user.greeting = function(){
    console.log("hello")
}
console.log(user.greeting())

// console.log(user["fullName"])

user.greeting2 = function(){
    console.log(`hello ${this.name}`)
}


