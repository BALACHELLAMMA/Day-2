// Merge two arrays and then sort the numbers from lowest to highest (ascending order)


const arrayOne = [1, 4, 6];
const arrayTwo = [2, 5, 3];

function mergeArrays(arrayOne,arrayTwo){
    let mergeArray =[];
    for(let index=0; index<arrayOne.length;index++){
        mergeArray.push(arrayOne[index])
        mergeArray.push(arrayTwo[index])

    }
    return mergeArray;
}

function sortNumbers(numberArray){
    let isSwapped =false;

    for(let step=0; step<numberArray.length-1; step++){
       for(let index=0; index<numberArray.length-step-1; index++){
            if(numberArray[index]>numberArray[index+1]){
                [numberArray[index],numberArray[index+1]] = [numberArray[index+1],numberArray[index]]
                 isSwapped = true;
            }
        }
        if(!isSwapped) break;
    }


    return numberArray;
}

function mergeAndSortArray(arrayOne,arrayTwo){
    let mergedArray = mergeArrays(arrayOne,arrayTwo);
    return sortNumbers(mergedArray) 
}


console.log(mergeAndSortArray(arrayOne,arrayTwo))
