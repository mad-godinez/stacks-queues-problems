const Stack = require("../lib/stack");

/***** ALGO+PSEUDO *****
  declare empty new Stack
  iterate thru input string
    if current_character is ‘(’ {push onto stack}
  else if current_character is ‘)’ {
      stack is not empty ⇒ pop top off stack
      stack is empty ⇒ return false
    } 
  if stack is empty {return true}
  else {return false}
***************************
(a + b) * c   // valid. match = true
((a + b) * c  // invalid. match = false
a + )b-c( + d // invalid. match = false
***************************/
const match = (expression) => {
  let match_parens = new Stack();

  expression.replaceAll(' ',''); // removing whitespace

  for(let i = 0; i < expression.length; i++) {
    const e = expression[i];
    if(e==='(') match_parens.push(e);
    if(e===')'){
      if(match_parens.top) 
        match_parens.pop()
      else 
        return !!match_parens.top;
    } 
  }
  return (!match_parens.top)
};

module.exports = match;

const solution = (expression) => {
  const stack = new Stack();

  for (let index = 0, limit = expression.length; index < limit; index++) {
    if (expression[index] === "(") {
      stack.push("(");
    } else {
      if (expression[index] === ")") {
        if (stack.top) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
  return !stack.top;
};