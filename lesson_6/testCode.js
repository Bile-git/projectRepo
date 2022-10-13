let winningLines =[
    [1, 2, 3,],[4, 5, 6,],[7, 8, 9], //rows
[1, 4,7,],[2, 5, 8],[3, 6, 9], // columns
[1, 5, 9],[3, 5, 7]// diagnal
]; 

 function joinOr( arr, delimiter = ',', word = 'or'){
 switch(arr.length){
case 0: 
    return '';
 case 1: 
    return `${arr[0]}`
case 2: 
    return arr.join(`${word}`)
default:
        return arr.slice(0, arr.length -1).join(delimiter)+ `${delimiter}${word} ${arr[arr.length -1]}`;  
 }
}
 