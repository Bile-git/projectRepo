let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];


let arr1 = arr.map(subArr=>{

if(typeof subArr[0]==='string'){

return subArr.slice().sort()}

else{return subArr.slice().sort((a, b)=>a-b)}})
console.log(arr1)
console.log(arr)