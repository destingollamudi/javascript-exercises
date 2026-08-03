const removeFromArray = function(arr, ...args) {
  const isBlacklist = (item) => {
    if (!args.includes(item)) {
      return true;
    }
    return false;
  }
  return arr.filter(isBlacklist);
};

// Do not edit below this line
module.exports = removeFromArray;
