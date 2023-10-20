// add "@" at the end of the character 'c'

let string = "cat in the bag";
let specialCharacter = '@';

function addSpecialCharAtEndOfC(string){
    let resultString = '';

    for(let index=0;index<string.length;index++){
        let currentCharacter = string.charAt(index);
        // let nextToCurrentCharacter = string.charAt(index+1);
        if((currentCharacter==='c' || currentCharacter==='C')){
            resultString+=currentCharacter+specialCharacter;
            index++;
        }
        else{
            resultString+=currentCharacter;
        }

    }
    

    return resultString;
}

console.log(addSpecialCharAtEndOfC(string));



// if(nextToCurrentCharacter==='c' || !nextToCurrentCharacter==='C'){
//     resultString+=currentCharacter+specialCharacter+nextToCurrentCharacter;
//     index+=2;
// }
// else if(nextToCurrentCharacter==='c'|| currentCharacter==='C'){
        //     resultString+=(currentCharacter+nextToCurrentCharacter+specialCharacter);
        //     index+=2;
        // }