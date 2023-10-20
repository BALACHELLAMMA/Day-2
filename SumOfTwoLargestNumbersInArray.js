// 7. Return the sum of two largest numbers
// Input: [32, 66, 80, 120, 45]
// Output: 200


function sortArray(numberArray){
    let isSwapped =false;

    for(let step=0; step<numberArray.length-1; step++){
       for(let index=0; index<numberArray.length-step-1; index++){
            if(numberArray[index]<numberArray[index+1]){
                [numberArray[index],numberArray[index+1]] = [numberArray[index+1],numberArray[index]]
                 isSwapped = true;
            }
        }
        if(!isSwapped) break;
    }


    return numberArray;
}



function sumOfTwoLargestNumbers(array){
    let sortedArray = sortArray(array);
    // console.log(sortedArray)
    return sortedArray[0]+sortedArray[1];
}

let array = [32, 66, 80, 120, 45]
console.log(sumOfTwoLargestNumbers(array))

















// function sumOfLargestNumbers(array,LargestCount){
//     let sum=0;
//     for(let index=0; index<array.length;index++){
//         if(index<LargestCount)
//            sum+=array[index]
//     }

//     return sum;
// }