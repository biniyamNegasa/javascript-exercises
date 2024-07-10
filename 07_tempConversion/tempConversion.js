const convertToCelsius = function(number) {
  const celsius = (number - 32) * (5/9);
  return Math.round(celsius, 1);
};

const convertToFahrenheit = function(number) {
  const fahrenheit = (number * (9/5)) + 32;
  return Math.round(fahrenheit, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
