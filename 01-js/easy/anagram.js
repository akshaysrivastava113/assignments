/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // str1 = str1.toLowerCase();
  // str2 = str2.toLowerCase();
  // if(str1.length === str2.length){
  //   let ascSum1 = 0;
  //   let ascSum2 = 0;
  //   for(let i=0; i < str1.length; i++){
  //     ascSum1+=str1.charCodeAt(i);
  //     ascSum2+=str2.charCodeAt(i);
  //   }
  //   // console.log(ascSum1);
  //   // console.log(ascSum2);
  //   if(ascSum1 === ascSum2){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // } else {
  //   return false;
  // }
  let someStr = "Hello World";
  let sliced = someStr.indexOf("ell");
  console.log(typeof sliced);
  console.log(someStr);
}
isAnagram();
module.exports = isAnagram;
