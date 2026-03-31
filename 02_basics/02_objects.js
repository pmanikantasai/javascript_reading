const man = new Object({});
 man.name = "manikantasai";
 man.department = "cse";
 man.id = 121
 man.age = 23
console.log(man)

const women = {
    name:"pranny",
    fullname:{
        first:"kndala",last:"pranny"
    },
    department:"cse",
    id:1221,
    age:21
}
// console.log(women);
// console.log(women.fullname);
// console.log(women.fullname.first);
// console.log(Object.keys(women))
// console.log(Object.values(women))

const obj1 ={1:"a",2:"b",3:"c"};
const obj2 = {4:"d",5:"e",6:"f"};
const obj3 = {...obj1,...obj2};
console.log(obj3)
 const obj4 = Object.assign({},obj1,obj2);
 console.log(obj4);
