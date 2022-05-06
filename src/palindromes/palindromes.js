const Stack = require("../lib/stack");

/** 
  remove all non-letter & non-digit chars
  split the string into 2 by its length
    - odd # string length: middle = length/2 rounded down
    - push 2nd half onto a stack
  compare the 1st half to the reverse of the 2nd half
    - odd # string length: start at middle+1
    - pop 1 char off stack & compare to middle
    - no match = no palindrome
    - match ⇒ keep going until stack is empty = palindrome
 * 
 * @param {*} sentence 
 */
const isPalindrome = (sentence) => {
  sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "").split('');
  
  const middle = Math.floor(sentence.length/2);
  let front = sentence.slice(0, middle), 
      back = sentence.length % 2 === 0 ? sentence.slice(middle) : sentence.slice(middle+1);
  
  let char_stack = new Stack();
  back.forEach((e)=> char_stack.push(e));

  var isMatch = true, i = 0;
  while(front.length > i && char_stack.top){
    let char_compare = char_stack.pop(); 
    if(front[i] !== char_compare) return !isMatch;
    i++;
  }
  return isMatch;
};

module.exports = isPalindrome;
// console.log(isPalindrome("abcba"))

function solution(sentence){
  sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let middle = Math.floor(sentence.length / 2);

  const stack = new Stack();

  for (let index = 0; index < middle; index++) {
    stack.push(sentence[index]);
  }

  middle += sentence.length % 2 === 0 ? 0 : 1;

  for (let index = middle, limit = sentence.length; index < limit; index++) {
    if (sentence[index] !== stack.pop()) {
      return false;
    }
  }

  return true;
}