// 3. Find the largest number in an array according to input
// Input: findLargest([3, 4, 5, 6, 88], 2) 
// Note here the second argument is 2, so the function to find the second largest number in array
// findLargest([3, 4, 5, 6, 88], 4) Note here the second argument is 4, so the function to find the fourth largest number in array

//sort array in descending order
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

function findLargestElementInArray(array,largestPosition){

    if(typeof largestPosition!=='number' || largestPosition<=0 || largestPosition>array.length) 
        return 'enter valid position'
    
    let sortedArray = sortArray(array);
    let largestElementIndex = largestPosition-1;
    return sortedArray[largestElementIndex];
}

let array = [3, 4, 5, 6, 88];
// console.log("Array: ",array)
// console.log(sortArray(array))

console.log(findLargestElementInArray(array, 2));
// console.log(findLargestElementInArray(array, -1));//negative value -> X
// console.log(findLargestElementInArray(array, 0)); // zero -> X
// console.log(findLargestElementInArray(array, 7)); //larger than length -> X
// console.log(findLargestElementInArray(array, '4')); //other type  
// console.log(findLargestElementInArray(array, true));

