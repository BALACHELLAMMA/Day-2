// 5. Calculate the sum of comma limited string
// Input: "1.5, 2, 44, 66, 12, 90"
// Output: 215.5

function sumOfCommaLimitedString(string){
   let sum=0;
   //split by ',' 
   let array = string.split(',');
   //string into number
   for(let index=0; index<array.length;index++) sum+=Number(array[index]);
   return sum;
}

let string = "1.5, 2, 44, 66, 12, 90"
console.log(sumOfCommaLimitedString(string))