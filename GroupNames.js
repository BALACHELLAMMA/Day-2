// 8. Group names according to the initial character
// Input: ["arun", "balu", "cathy", "krish", "aadhir", "aariketh", "kamal"]
// Output
// ["arun", "aadhir", "aariketh"]
// ["balu"]
// ["cathy"]
// ["krish", "kamal"]


function groupNamesByInitialChar(names) {
    
    let groupedNames = {};
    
    for (let name of names) {
    
        if(typeof name!='string') continue;
    
      //store every initial character of current string 
      const initialCharacter = name.charAt(0).toLowerCase();
      
      //initial char of string not in array , then add it 
      if (groupedNames[initialCharacter]) {
        groupedNames[initialCharacter].push(name);
      } else {
        groupedNames[initialCharacter] = [name];
      }
    }
  
    // Convert the grouped object to an array of arrays
    const resultArray = Object.values(groupedNames);
    // console.log(groupedNames)
    
    return resultArray;
  }
  
  const namesArray = ["arun", "balu", "cathy", "krish", 123,"aadhir",true, "aariketh", "kamal"];
  // console.log(groupNamesByInitialChar(names))--> it will print array of arrays
  const groupedNames = groupNamesByInitialChar(namesArray)
  
  for(let index=0;index<groupedNames.length;index++) console.log(groupedNames[index])
  