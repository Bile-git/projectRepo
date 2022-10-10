/*Using a callback to sort collections lets us sort all kinds of values in a variety of ways.
 Take the following nested array, for example:*/
 
let scores = [[3, 6, 4,], [6 ,8, 9] ,[1, 4, 2]];

scores.sort((a, b)=>{
    let totalAScore = a.reduce((number, next)=> number +next);
    let totalBScore = b.reduce((number, next)=> number + next);
    return totalAScore - totalBScore;
})

console.log(scores) //=>[ [ 1, 4, 2 ], [ 3, 6, 4 ], [ 6, 8, 9 ] ]