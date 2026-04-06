coding=["python","javascript","java","c++"];

const nums = [1,2,3,4,5,6,7,8,9,10];

// filter is a method that creates a new array with all elements that pass the test implemented by the provided function
const numbers= numbersGreaterThan5 = nums.filter((num) => num > 5);
//console.log(numbers);

const datasets =[
    {personName: "John", age: 45, city : "hyderabad"},
    {personName: "Jane", age: 30, city : "bangalore"},
    {personName: "Doe", age: 35, city : "chennai"},
    {personName: "Smith", age: 40, city : "delhi"},
    {personName: "Emily", age: 45, city : "mumbai"},
    {personName: "Michael", age: 50, city : "kolkata"},
    {personName: "Sarah", age: 55, city : "pune"},
    {personName: "David", age: 60, city : "ahmedabad"},
    {personName: "Laura", age: 65, city : "jaipur"},
    {personName: "James", age: 70, city : "lucknow"}
]

let  peopledataset =datasets.filter( (person) => person.age > 30)
//console.log(peopledataset);

peopledataset = datasets.filter((pl)=> {
    return pl.age >30 && pl.city === "hyderabad"
})
//console.log(peopledataset);

// map is a method that creates a new array populated with the results
// of calling a provided function on every element in the calling array

const digits = [1,2,3,4,5,6,7,8,9,10];
const numbersSquared = digits.map((num) => num * num);
//console.log(numbersSquared);

const numbersDoubled = digits.map((num) => {
    return num * 2;// return is used to return the value from the function
});
//console.log(numbersDoubled);

const numberss = digits.map( (num) => num*10).map((num) => num+100)
.filter((num)=> num > 130);

console.log(numberss);



