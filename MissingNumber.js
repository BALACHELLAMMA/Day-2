// 6. Find the missing numbers in an array
// Input: [68, 71, 69, 73]

function findMissingElements(array, arrayLength)
{
    //initially , difference will have first element
	let difference = array[0] - 0;
    let missingElements =[];
	for(let index=0; index<arrayLength; index++)
	{  
        if(typeof array[index]!=='number') continue;
		if (array[index] - index != difference)
		{
		while (difference < array[index] - index)
			{
				// console.log((index + difference) + " ");
                missingElements.push(index+difference)
				difference++;
			}
		}
	}
    return missingElements;
}

let array = [68, 69,71, 73]
//[89,91,88,true] 
//[89,91,88,true] 
//[89,91,88,'hello']
//[ 6, 7, 10, 11, 13 ];	

console.log(findMissingElements(array,array.length))
	


  