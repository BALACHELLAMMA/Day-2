// 6. Find the missing numbers in an array
// Input: [68, 71, 69, 73]
function sortArray(numberArray){
    let isSwapped =false;

    for(let step=0; step<numberArray.length-1; step++){
       for(let index=0; index<numberArray.length-step-1; index++){
        
        if(typeof array[index]!=='number' || typeof array[index]=='boolean') continue;

        if(numberArray[index]>numberArray[index+1]){
                [numberArray[index],numberArray[index+1]] = [numberArray[index+1],numberArray[index]]
                 isSwapped = true;
            }
        }
        if(!isSwapped) break;
    }


    return numberArray;
}

function findMissingElements(array, arrayLength)
{
    array = sortArray(array)

    //initially , difference will have first element
	let difference = array[0] - 0;
    let missingElements =[];

	for(let index=0; index<arrayLength; index++)
	{  
        if(typeof array[index]!=='number') continue;

		if (array[index] - index != difference)
		{
            //find missing numbers between difference and (current element - currentIndex)
		while (difference < array[index] - index)
			{
				// console.log((index + difference) + " ");
                let missingElement = index+difference;
                missingElements.push(missingElement)
				difference++;
			}
		}
	}
    return missingElements;
}

let array = [68,71,69,73]
//[89,91,88,'hello']
//[ 6, 7, 10, 11, 13 ];	

console.log(findMissingElements(array,array.length))
	


  