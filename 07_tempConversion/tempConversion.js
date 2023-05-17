const convertToCelsius = function(num) {
  let result = (num - 32) * (5/9);

    if (result === 0){
      return 0;
    }else {
      return +result.toFixed(1);
    }
};

const convertToFahrenheit = function(num) {
    let result = num * (9/5) + 32;

    if (result === 0){
      return 0;
    }else {
      return +result.toFixed(1);
    }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
