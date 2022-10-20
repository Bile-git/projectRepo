/*PEDAC 
========
p => understing promblem
input :
-A number
- An integer greater than 1
output: 
- A number
- sum of Number
Rules:
finding sum of number  between 1 and the and the input integer that are multiples
of 3 and 5;
- the sum is inclusive of input number 
- input number will an integer > 1
-multiples of 3 and 5 
E => Example and Test case 

multisum(3)  // 3 -> 1,2,3->3
multisum   // 8 ->1,2,3,4,5,->8
multisum  // 33-> 1,2,3,4,5,6,7,8,9,10
-> 3,5,6,9,10
->33
multisum(1000)  // 234168

D => Data structure
-increment throuhg number to determine a Sum
- create a list of the multiples  and find its sum .
-
[] -> 
A => Algorithm
- create a variable named sum and initialize it  to 0
iterate through the numbers the from 1 to input number (inclusive)
-if current number  %3 is 0 or the ccurrent number %5 is 0
-add current number to the Sum.
//-after we've iterated through all the numbers. return the value of sum.
C => code with intent 
write function that compute Number between 1 and other numbers inclusivr  that are multiplrd of 3 and 5.AbortController
eg if the supples 20 the result should be 98(3+5+6+9+10+12+15=18+20)
*/
function multiSum(maxValue){
    let multiples = [];
    for( let num =1 ; num <= maxValue; num += 1){
        multiples.push(num);
    }
    multiples =  multiples.filter(number => number % 3 ===0|| number % 5===0)
        let sum = multiples.reduce(acc, val => acc + val)
    console.log(sum);
    return sum;
}
multiSum(3)
multiSum(5)
multiSum(10)
multiSum(10000)


function multisum(maxValue){
    let sum = 0;
    for(let num = 1; num<= maxValue; num++){
        if (num % 3===0 ||num % 5 ===0){
            aum += num;

        }
    }
    console.log(sum);
}