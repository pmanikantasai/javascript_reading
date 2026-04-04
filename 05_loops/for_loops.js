// for loops are used to repeat a block of code a certain number of times

// syntax:
// for (initialization; condition; increment) {
//   // code to be executed
// }

// for (let i =0; i<10;i++){
//     console.log(i)
// }


// if condition in side the for loop 
// for (let i = 0; i < 10; i++) {
//     if (i %2==0){
//         console.log(`the nums divided by 2 ,${i}`)
//     } 
// }

// // nested for loops
// for(let i = 0; i<10;i++){
//     //console.log("outer loop i value : ", i);
    
//     for (let j = 0; j<10;j++){
//         console.log(`inner loop j value ${j} and outer loop i value ${i}`)
//     }
// }

for(let i = 0; i<10;i++){
    //console.log("table : ", i);
    
    for (let j = 0; j<10;j++){
        //console.log(i+"*"+j+"="+(i*j))
    }
}

const myArray =["mani","anusha","pandu","sandeep","teja"]
let len= myArray.length
c=0
for (i=0;i<len;i++){
   // console.log(myArray[i])
    c=c+1
}
//console.log(c)

// break and continue in for loops
// break is used to exit the loop when a certain condition is met

for (let i = 0; i < 10; i++) {
    //console.log("the value of i is : ", i);
    if (i ==5){
        break

    }
    
}

//continue is used to skip the current iteration of the loop when a certain condition is met

for (i=0;i<20;i++){
    
    if (i%5==0){
        console.log("the multiple of 5 :" , i);
        continue
    }
    console.log("the value :" , i);
}