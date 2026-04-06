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
    //console.log(`${key}=>${myobject[key]}`);
    
}

// foreach is a method that executes a provided function once for each array element
const codingLanguages = ["JavaScript", "Python", "Java", "C++"];
codingLanguages.forEach(function(language){
   // console.log(language);
})

codingLanguages.forEach((language) => {
   // console.log(language);
});

codingLanguages.forEach((item,index,arr)=>{
    //console.log(`Item: ${item}, Index: ${index}, Array: ${arr}`);
    //console.log(item,index,arr);
    
})

const coding=[
    {"codename": "python",
    "filename": "python.py"},
    {"codename": "javascript",
    "filename": "javascript.js"},
    {"codename": "java",
    "filename": "java.java"},
    {"codename": "c++",
    "filename": "c++.cpp"}
]

coding.forEach((item)=>{
    //console.log(item.filename);
   
})
//console.log("=====================================")
coding.forEach((item)=>{
    //console.log(item.codename);
   
})