// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var _;
var stringifyJSON = function(obj) {
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return String(obj);
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (obj === null) {
    return 'null';
  } else if (obj === undefined) {
    return obj;
  }

  if (Array.isArray(obj)) {
    // join array on delimiter (,)
    var stringifiedArray = _.map(obj, function(element) {
      if (element === undefined || typeof element === 'function') {
        return 'null';
      }
      return stringifyJSON(element);
    });
    return '[' + stringifiedArray.join(',') + ']';
  }
  // object
  var stringifiedObject = _.reduce(obj, function(memo, value, key) {
    if (value === undefined || typeof value === 'function') {
      return memo;
    }
    return memo + stringifyJSON(key) + ':' + stringifyJSON(value) + ','
  }, '{');

  if (stringifiedObject.length > 1) {

    return stringifiedObject.slice(0, stringifiedObject.length - 1) + '}';
  }
  return stringifiedObject + '}';
};
