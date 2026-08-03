const sumAll = function(a, b) {
  if (typeof(a) != Number || typeof(b) != Number){
    return 'ERROR';
  }
  if (a < 0 || b < 0){
    return 'ERROR';
  }
};

// Do not edit below this line
module.exports = sumAll;
