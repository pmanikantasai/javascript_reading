// for of means "for each element of the array, do this"
let myArray = [1, 2, 3, 4, 5];
for (let element of myArray) {
   // console.log(element);
}

// for in means "for each property of the object, do this"
let myObject = {a: 1, b: 2, c: 3};
for (let property in myObject) {
    //console.log(property); // this will print the property name
    //console.log(property + ": " + myObject[property]);
}

// MAP is a method that creates a new array by applying a function to each element of the original array
const map =new Map();
map.set("IN", "India");
map.set("US", "United States");
map.set("UK", "United Kingdom");

for (const [key,values] of map) {
   // console.log(key + " : " + values);
}

const myobject = {
    "TL":"TELUGU",
    "EN":"ENGLISH",
    "HI":"HINDI"
}

for (const key in myobject) {
    //console.log(key);
    console.log(`${key}=>${myobject[key]}`);
    
}