console.log(100);
const bal=new Number(200) // here we take number type
console.log(bal);// # output [Number:200]

// method of numbers
console.log(bal.toString()) // here num into string #output "200"

console.log(bal.toFixed(2));

const hun = new Number(1000000)
console.log(hun.toLocaleString());// here gives america standards of num # 1,000,000
// we want indian then use('en-In')
console.log(hun.toLocaleString('en-In'))//# 10,00,000





