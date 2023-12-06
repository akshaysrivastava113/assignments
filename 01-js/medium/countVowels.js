/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let c = 0;
    for(let charC of str){
      if(charC == 'a' || charC ==  'e' || charC == 'i' || charC == 'o' || charC == 'u' || charC == 'A' || charC ==  'E' || charC == 'I' || charC == 'O' || charC == 'U'){
        c++;
      }
    }
    return c;
}

module.exports = countVowels;