const add = function(a, b) {
	return (a + b);
};

const subtract = function(a, b) {
	return (a - b);
};

const sum = function(list) {
	let curr = 0;
  for (const num of list) {
    curr += num;
  }
  return curr;
};

const multiply = function(list) {
  let curr = 1;
  for (let num of list){
    curr *= num;
  }
  return curr;
};

const power = function(num, exp) {
  let start = 1;
  for (let i = 0; i < exp; i++){
    start *= num;
  }
  return start;
};

const factorial = function(num) {
	if (num <= 1) return 1;
  let start = 1;
  for (let i = num; i > 1; i--){
    start *= i;
  }

  return start;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
