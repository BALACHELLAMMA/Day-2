// Replace any numbers in a string to a character passed to the function
// Input: replaceNumbers("arun@123", "d");
// Output: arun@ddd



function replaceNumberBySpecifiedCharacter(string,replacingCharacter){
    let result = '';
    let numbersString ='0123456789';
    let typeArray = ['number','boolean','undefined','object']

    //if(string.length===0 || replacingCharacter.length===0) return 'Empty String or replacing character not accepted'

    if(typeArray.includes(typeof replacingCharacter) || typeArray.includes(typeof string))
    {
        return 'Enter Valid string or replacing character';  
    }

    for (let index=0; index<string.length; index++){
        let currentCharacter  = string.charAt(index);
        if (numbersString.includes(currentCharacter))
            result+=replacingCharacter;
        else
            result+=currentCharacter;
    }
    return result;
}

let string = "arun@123"
let replacingCharacter = null


// console.log(replaceNumberBySpecifiedCharacter(string,replacingCharacter))
console.log(replaceNumberBySpecifiedCharacter(string,replacingCharacter))
