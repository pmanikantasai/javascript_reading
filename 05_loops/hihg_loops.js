// for of means "for each element of the array, do this"
let myArray = [1, 2, 3, 4, 5];
for (let element of myArray) {
    console.log(element);
}

// for in means "for each property of the object, do this"
let myObject = {a: 1, b: 2, c: 3};
for (let property in myObject) {
    console.log(property); // this will print the property name
    console.log(property + ": " + myObject[property]);
}