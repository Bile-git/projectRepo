/*
return a new array with the same structure,
 but with the values in each subarray ordered -- 
 alphabetically or numerically as appropriate -- 
 in descending order. */

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let arr2 = arr.map(subArr => {
return  subArr.slice().sort((a, b )=>{
if(typeof a ==='number'){ return a - b

}if(a < b){return 1} 
else if(a>b){return -1}

else{return 0}
})
})
console.log(arr2)