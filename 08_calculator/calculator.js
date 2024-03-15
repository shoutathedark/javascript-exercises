const add = function(num1, num2) {
	return num1+num2
};

const subtract = function(num1,num2) {
	return num1-num2
};

const sum = function(array) {
	return array.reduce((accumulator,currvalue)=>
    accumulator+currvalue
  ,0,)
};

const multiply = function(array) {
  return array.reduce((accumulator,currvalue)=>
    accumulator*currvalue
  )
};

const power = function(num1,num2) {
	return num1**num2
};

const factorial = function(num) {

  function rFact(number)
{
    if (number === 0)
      { return 1; }
    else
      { return number * rFact( number - 1 ); }
}

return rFact(num);
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
