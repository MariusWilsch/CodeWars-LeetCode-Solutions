// Link to Kata: https://www.codewars.com/kata/54ba84be607a92aa900000f1

function isIsogram(str){
  
  str = str.toLowerCase();
  
  console.log(str);
    
  let strArray = str.split('');
  console.log(strArray);
  let alphabetArray = String.fromCharCode(...Array(123).keys()).slice(97).split('');
  console.log(alphabetArray);
  let alphabetCounter = [];
  let counter = 0;
  
  while (counter < 26)  {
    alphabetCounter.push(0);
    counter++;
  }
  console.log(alphabetCounter);
  
  let index = 0;
  let index2 = 0;
  
  while (index < strArray.length) {
    while (index2 < alphabetCounter.length)  {
      if (strArray[index] === alphabetArray[index2])  {
        alphabetCounter[index2] += 1;
        if (alphabetCounter[index2] === 2)  {
          return false;
        }
      }
      index2++;
    }
    index++;
    index2 = 0;
  }
  console.log(alphabetCounter);
  return true;
}