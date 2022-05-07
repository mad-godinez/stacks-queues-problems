const Stack = require("../lib/stack");

/***** ALGO+PSEUDO *****
remove whitespace from input String
declare empty new Stack
declare empty result String
iterate thru input String
	if current_character is operand { append to result }

	if current_character is operator + - / * {
		declare a temp variable to hold stack.top
		if stack is empty 
			or stack.top is '(' 
			or current_character's precedence > stack.top's precedence 
			{ push onto stack }
		else{
			while current_character's precedence <= stack.top's precedence
						and stack.top is not ')'
			{
				pop top off stack
				append popped top to result
			}
		}
  }
  else{
    if current_character is ‘(’ { push onto stack }
    if current_character is ‘)’ { 
      while current_character is not ‘(’ {
        pop top off stack 
        append popped top to result
      }
    }
  }
return result String
***************************/

// const postfix = (expression) => {
//   if(expression.length < 1) return expression;
//   let stack = new Stack(), 
//       result = [],
//       precedence = new Map();
//   precedence.set('+', 0);
//   precedence.set('-', 0);
//   precedence.set('/', 1);
//   precedence.set('*', 1);

//   for(let i = 0; i < expression.length; i++){
//     const current = expression[i];

//     if(current === '(') stack.push(current);
//     else{

//     }else 
//         result.push(current);
//     if(current === ')'){
//       while(stack.top.value !== '('){ 
//         result.push(stack.pop());
//       }
//     }else{
//       if((/[+-/*]/).test(current)){
//         if(!stack.top || stack.top.value === '(' ||(precedence.get(current) > precedence.get(stack.top.value))){
//           stack.push(current);
//         }
//         else{
//           console.log(stack.top.value)

//           while(stack.top && (precedence.get(current) <= precedence.get(stack.top.value))){ 
//             result.push(stack.pop());
//           }
//           stack.push(current);
//         }
        
//       }
  
//       if((/[a-z]/).test(current)) result.push(current);
//     }

//   }
 
//   return result.join(' ');
// };
const precedence = {
  "+": 0,
  "-": 0,
  "*": 1,
  "/": 1,
};

const postfix = (expression) => {

  const stack = new Stack();
  const result = [];

  expression = expression.replace(/\s/g, "");

  expression.split("").forEach((character) => {
    if (character === "(") {
      stack.push(character);
    } else {
      if (character === ")") {
        let top = stack.pop();
        while (top !== "(") {
          result.push(top);
          top = stack.pop();
        }
      } else {
        if ("+-*/".includes(character)) {
          if (
            !stack.top ||
            stack.top.value === "(" ||
            precedence[character] > precedence[stack.top.value]
          ) {
            stack.push(character);
          } else {
            while (stack.top && precedence[stack.top.value] >= precedence[character]) {
              result.push(stack.pop());
            }

            stack.push(character);
          }
        } else {
          result.push(character);
        }
      }
    }
  });

  while (stack.top) {
    result.push(stack.pop());
  }

  return result.join(" ");
} 

module.exports = postfix;

const actual = postfix("(a + b) * c");
console.log(actual); // "a b + c *"
///////////////
function solution(expression){
  const precedence = {
    "+": 0,
    "-": 0,
    "*": 1,
    "/": 1,
  };
  
  const postfix = (expression) => {
  
    const stack = new Stack();
    const result = [];
  
    expression = expression.replace(/\s/g, "");
  
    expression.split("").forEach((character) => {
      if (character === "(") {
        stack.push(character);
      } else {
        if (character === ")") {
          let top = stack.pop();
          while (top !== "(") {
            result.push(top);
            top = stack.pop();
          }
        } else {
          if ("+-*/".includes(character)) {
            if (
              !stack.top ||
              stack.top.value === "(" ||
              precedence[character] > precedence[stack.top.value]
            ) {
              stack.push(character);
            } else {
              while (stack.top && precedence[stack.top.value] >= precedence[character]) {
                result.push(stack.pop());
              }
  
              stack.push(character);
            }
          } else {
            result.push(character);
          }
        }
      }
    });
  
    while (stack.top) {
      result.push(stack.pop());
    }
  
    return result.join(" ");
} 
postfix("(((a + b) * (c - d))/(a - b) + (c / d))");
}