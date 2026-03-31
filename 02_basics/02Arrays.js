// const tollyWood = ["ramcharan", "prabhas", "ntr", "balakrishna"];
// const bollyWood = ["shahrukh", "salman", "amir", "hrithik"];
// // tollyWood.push(bollyWood)

// // console.log(tollyWood);// array will have the bollyWood array as the last element
// // console.log(tollyWood.length)

// // concat method - used to merge two or more arrays
// const allHeros = tollyWood.concat(bollyWood);
// console.log(allHeros); // this will print the merged array of tollyWood and bollyWood
// const allHeros2 = [...tollyWood, ...bollyWood]; // using spread operator to merge arrays
// console.log(allHeros2); // this will also print the merged array of tollyWood and bollyWood
const new_array = [1, 2, 3, 4, 5,[7,8,9,10],11,[12,13,[14,15,16]]];
const flat_array= new_array.flat(Infinity); // flat method - used to flatten nested arrays
console.log(flat_array); // this will print the flattened array with all elements in a single level