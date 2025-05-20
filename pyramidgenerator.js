function pyramid(string, rows, isPointingDown){
  let pyramidString = "";
  
  if(!isPointingDown){
    let numOfSymbolsLastRow = rows*2-1
    for(let i = 0; i<rows; i++){
      let currentRow = i;
      let numOfSymbols = currentRow * 2 + 1;
      let diff = numOfSymbolsLastRow - numOfSymbols;
      let spaceInt = diff/2;
      let whiteSpace = " ";
      
      pyramidString += `\n${whiteSpace.repeat(spaceInt)}${string.repeat(numOfSymbols)}`;
      
    }  
  }
  else{
    let numOfSymbolsFirstRow = rows*2-1;
    for(let i = rows; i>0 ; i--){
      let currentRow = i - 1;
      let numOfSymbols = currentRow * 2 + 1;
      let diff = numOfSymbolsFirstRow - numOfSymbols;
      let spaceInt = diff/2;
      let whiteSpace = " ";
      
      pyramidString += `\n${whiteSpace.repeat(spaceInt)}${string.repeat(numOfSymbols)}`;
    }
  }   
  return pyramidString + "\n";


}
console.log(pyramid("o", 4, false)); //test
console.log(pyramid("p", 5, true)); //test
