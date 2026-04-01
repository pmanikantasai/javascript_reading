 let myDate =  new Date();

//  console.log(myDate);
//  console.log(myDate.toString());
//  console.log(myDate.toDateString());
//  console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth());
// console.log(myDate.getDate());
// console.log(myDate.getDay());

// let myCrtDate = new Date(2002, 0, 28); // in js month starts with 0, so 0 is January, 1 is February and 2 is March
// console.log(myCrtDate);
// console.log(myCrtDate.toString());
// let myCreateDate = new Date(2002, 3, 28);
// console.log(myCreateDate);
// console.log(myCreateDate.toString());

// console.log(typeof myDate);
// console.log(myDate.getMonth());
// console.log(myDate.getDay());
console.log(myDate.toLocaleString('default', { month: "2-digit"}));