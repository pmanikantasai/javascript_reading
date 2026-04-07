// find the largest num in the array
arr=[5, 10, 3, 8, 15, 2,3,5]
function findlargestnum(arr){
    let largest = arr [0] // [0]=5
    for (let i =0; i < arr.length;i++){// i=0,1,2,3,4,5
        if (arr[i]>largest)// s-1 arr[0]=5>5 false, s-2 arr[1]=10>5 true, largest=10, s-3 arr[2]=3>10 false, s-4 arr[3]=8>10 false, s-5 arr[4]=15>10 true, largest=15, s-6 arr[5]=2>15 false
            largest = arr[i]
    }
    return largest
}
//console.log(findlargestnum(arr))

// find the smallest num in the array
function findsmallestnum(arr){
    let smallest = arr [0] // [0]=5
    for (let i =0; i < arr.length;i++){// i=0,1,2,3,4,5
        if (arr[i]<smallest)// s-1 arr[0]=5<5 false, s-2 arr[1]=10<5 false, s-3 arr[2]=3<5 true, smallest=3, s-4 arr[3]=8<3 false, s-5 arr[4]=15<3 false, s-6 arr[5]=2<3 true, smallest=2
            smallest = arr[i]
    }
    return smallest
}
//console.log(findsmallestnum(arr))

// sum of the array
function sumOfTheArray(arr){
    let sum =0
    for(let i =0;i<arr.length;i++){
        sum =sum +arr[i]
    }
    return sum
}
//console.log(sumOfTheArray(arr))

// reverse the array
//console.log(arr);
//console.log(arr.reverse())

// count of even and odd nums
function countEvenODD(arr){
    let even =0
    let evenArr =[]
    let odd=0
    let oddArr =[]
    for(let i =0;i<arr.length;i++){
        if (arr[i]%2===0){
            evenArr.push(arr[i])
            even++
        }
        else{
            oddArr.push(arr[i])
            odd++   
        }
    }
    return `count of even nums is ${even} ${evenArr} and count of odd nums is ${odd} ${oddArr}` 
}
//console.log(countEvenODD(arr));


// remove duplicates from the array
function removeDuplicates(arr){
    let unqieArr =[]
    for (i=0;i<arr.length;i++){// i=0,1,2,3,4,5,6,7
        if(!unqieArr.includes(arr[i])){// its check the value is present in the unqieArr or not, s-1 unqieArr.includes(5) false, s-2 unqieArr.includes(10) false, s-3 unqieArr.includes(3) false, s-4 unqieArr.includes(8) false, s-5 unqieArr.includes(15) false, s-6 unqieArr.includes(2) false, s-7 unqieArr.includes(3) true, s-8 unqieArr.includes(5) true
            unqieArr.push (arr[i])
        }
    }
    return unqieArr
}
//console.log(removeDuplicates(arr));
   