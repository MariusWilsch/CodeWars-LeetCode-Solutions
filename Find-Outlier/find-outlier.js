// Link to Kata: https://www.codewars.com/kata/5526fc09a1bbd946250002dc

function findOutlier(int){
  //your code here
  
  let evenCounter = 0;
  let unevenCounter = 0;
  let index = 0;
  
  
  while (index < int.length)  {
    if (int[index] % 2 === 0) {
      evenCounter++;
    } else {
      unevenCounter++;
    }
    if (evenCounter === 2 || unevenCounter === 2) {
      break;
    }
    index++;
  }
  
  
  if (evenCounter === 2)  {
    index = 0;
    while (index < int.length) {
      if (int[index] % 2 !== 0) {
        console.log(int[index]);
        return int[index];
      } 
      index++;
    }
  } else {
        index = 0;
        while (index < int.length)  {
          if (int[index] % 2 === 0) {
            return int[index];
       }
        index++;
     }
   }
}

// Reword it: Every array of ints consistent either of odd or 
// of even numbers execpet one outlier. The goal here is to find 
// and return that outlier

// Input: a array with ints
// Output: return that outlier

// Steps to desired output:
  // 1. Modolu against 2 to check if remainder is 0
    //1. For each reaminder which equals to 0 increment a even-counter 
    //2. For each remainder which doesn't equal 0 increment a uneven-counter
    //3. If either even or uneven counter is bigger than 1 break the loop
  // 2. Look for outlier
    //1. If even loop until modolu is not 0
    //2. If uneven loop until modolu is 0